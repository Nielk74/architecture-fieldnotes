package io.github.nielk74.fieldnotes;

import android.content.Context;
import android.content.SharedPreferences;
import androidx.test.core.app.ActivityScenario;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;
import org.junit.Test;
import org.junit.runner.RunWith;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import static org.junit.Assert.*;

@RunWith(AndroidJUnit4.class)
public class ProgressPersistenceTest {
    private SharedPreferences preferences() {
        return InstrumentationRegistry.getInstrumentation().getTargetContext().getSharedPreferences("CapacitorStorage", Context.MODE_PRIVATE);
    }
    private String js(ActivityScenario<MainActivity> scenario, String script) throws Exception {
        CountDownLatch latch = new CountDownLatch(1);
        AtomicReference<String> result = new AtomicReference<>("");
        scenario.onActivity(activity -> activity.getBridge().getWebView().evaluateJavascript(script, value -> {result.set(value);latch.countDown();}));
        assertTrue("WebView did not reply", latch.await(30, TimeUnit.SECONDS));
        return result.get();
    }
    private void waitFor(ActivityScenario<MainActivity> scenario, String expression) throws Exception {
        long deadline = System.currentTimeMillis() + 60000;
        while(System.currentTimeMillis() < deadline) {if("true".equals(js(scenario, expression)))return;Thread.sleep(150);}
        fail("Page condition not reached: " + expression + " | " + js(scenario,"location.href + ' | ' + document.body.innerText.slice(0,300)"));
    }
    private void open(ActivityScenario<MainActivity> scenario,String path) throws Exception {
        android.os.Bundle status = new android.os.Bundle();
        status.putString("stream", "Checking course page: " + path + "\n");
        InstrumentationRegistry.getInstrumentation().sendStatus(2, status);
        String previous=js(scenario,"performance.timeOrigin");
        js(scenario,"(()=>{const link=document.createElement('a');link.href='https://localhost"+path+"';document.body.append(link);link.click();link.remove();})()");
        waitFor(scenario,"performance.timeOrigin !== "+previous);
        waitFor(scenario,"document.querySelector('#book-stage') !== null");
    }
    private void awaitSaved(String key,String value) throws Exception {
        long deadline=System.currentTimeMillis()+15000;
        while(System.currentTimeMillis()<deadline){if(preferences().getString(key,"").contains(value))return;Thread.sleep(150);}
        fail("Native progress was not persisted: "+key);
    }
    private final String[] additionalPaths={"staff-engineer","responsible-engineering","sre","observability","ai-agents"};
    private void seedAdditionalPaths(ActivityScenario<MainActivity> scenario) throws Exception {
        for(String path:additionalPaths) {
            open(scenario,"/learn.html?path="+path+"#chapter/1/explore");
            waitFor(scenario,"document.querySelectorAll('[data-concept]').length >= 4");
            js(scenario,"document.querySelectorAll('[data-concept]').forEach(b=>b.click())");
            awaitSaved("fieldnotes-"+path+"-v1","\"explore\":true");
            js(scenario,"location.hash='chapter/1/apply'");
            waitFor(scenario,"document.querySelector('[data-work]') !== null");
            js(scenario,"(()=>{const e=document.querySelector('[data-work]');e.value='Persistent "+path+" learning reflection';e.dispatchEvent(new Event('input',{bubbles:true}));})()");
            awaitSaved("fieldnotes-"+path+"-v1","Persistent "+path);
        }
    }
    @org.junit.Before public void pauseMotionForPersistenceChecks() {
        // Motion is verified in the browser suite. Avoid software-rendered SVG load
        // while measuring native storage and navigation on hosted emulators.
        preferences().edit().putString("fieldnotes-motion-v1", "off").commit();
    }
    @Test public void seedProgressThroughUI() throws Exception {
        try(ActivityScenario<MainActivity> scenario=ActivityScenario.launch(MainActivity.class)) {
            waitFor(scenario,"document.querySelector('.path-card') !== null");
            open(scenario,"/hard-parts.html#chapter/1/explore");
            waitFor(scenario,"document.querySelectorAll('[data-concept]').length >= 4");
            js(scenario,"document.querySelectorAll('[data-concept]').forEach(b=>b.click())");
            waitFor(scenario,"document.querySelector('#book-chapter-score').textContent === '20 / 100 chapter XP'");
            awaitSaved("fieldnotes-hard-parts-v1","\"explore\":true");
            js(scenario,"location.hash='chapter/1/apply'");
            waitFor(scenario,"document.querySelector('[data-work]') !== null");
            js(scenario,"(()=>{const e=document.querySelector('[data-work]');e.value='Android persistence: retain my trade-off reasoning';e.dispatchEvent(new Event('input',{bubbles:true}));})()");
            awaitSaved("fieldnotes-hard-parts-v1","Android persistence");
            open(scenario,"/fundamentals.html#chapter/11/explore");
            waitFor(scenario,"document.querySelectorAll('[data-concept]').length >= 4");
            js(scenario,"document.querySelectorAll('[data-concept]').forEach(b=>b.click())");
            awaitSaved("fieldnotes-book-v1","\"explore\":true");
            seedAdditionalPaths(scenario);
            // Native preferences must survive loss of WebView localStorage.
            js(scenario,"localStorage.clear()");
            open(scenario,"/hard-parts.html#chapter/1/apply");
            waitFor(scenario,"document.querySelector('[data-work]')?.value === 'Android persistence: retain my trade-off reasoning'");
        }
    }
    @Test public void verifyProgressAfterUpdate() throws Exception {
        assertTrue("Update lost the original path",preferences().getString("fieldnotes-book-v1","").contains("\"explore\":true"));
        assertTrue("Update lost the new path",preferences().getString("fieldnotes-hard-parts-v1","").contains("Android persistence"));
        try(ActivityScenario<MainActivity> scenario=ActivityScenario.launch(MainActivity.class)) {
            waitFor(scenario,"document.querySelector('.path-card') !== null");
            open(scenario,"/hard-parts.html#chapter/1/apply");
            waitFor(scenario,"document.querySelector('[data-work]')?.value === 'Android persistence: retain my trade-off reasoning'");
            waitFor(scenario,"document.querySelector('#book-chapter-score').textContent === '20 / 100 chapter XP'");
            open(scenario,"/fundamentals.html#chapter/11/explore");
            waitFor(scenario,"document.querySelector('#book-chapter-score').textContent === '20 / 100 chapter XP'");
            for(String path:additionalPaths) {
                assertTrue("Update lost "+path,preferences().getString("fieldnotes-"+path+"-v1","").contains("Persistent "+path));
                open(scenario,"/learn.html?path="+path+"#chapter/1/apply");
                waitFor(scenario,"document.querySelector('[data-work]')?.value === 'Persistent "+path+" learning reflection'");
                waitFor(scenario,"document.querySelector('#book-chapter-score').textContent === '20 / 100 chapter XP'");
                waitFor(scenario,"document.querySelector('[data-companion-track=overall] .pip-avatar')?.dataset.pipLevel === '1'");
                waitFor(scenario,"document.querySelector('[data-companion-track=\""+path+"\"] .course-pip-avatar')?.dataset.pipLevel === '0'");
            }
        }
    }
}
