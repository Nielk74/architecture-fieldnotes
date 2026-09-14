# Chapter 6: Knowledge and Memory

Original learning notes. Source: text lines 4798–5524 in the supplied book.

Knowledge retrieval supplies information beyond the model’s parameters, while memory preserves useful history from earlier interactions and actions. Neither is the same as the limited context provided to a particular invocation. Lexical retrieval helps with exact names and terms; vector search can find related meanings despite different wording. Graph-based retrieval adds explicit relationships but requires additional construction, validation, and maintenance. Working memory and notes help organize evidence for the current task, while persistent records need selection and updating over time. Choose these mechanisms according to the information the task needs: storing more material does not ensure that the right material reaches the model.

## Context windows

An agent’s context window limits what can be supplied to a model invocation. Context engineering decides what to retain, summarize, retrieve, or discard so relevant evidence survives without overwhelming the model.

## Full-text retrieval

Keyword retrieval such as BM25 finds exact terms and names efficiently. It can miss paraphrases and semantic matches, so ranking, chunking, and query formulation affect what evidence reaches the agent.

## Semantic vectors

Embeddings represent text as dense vectors; nearest-neighbor search retrieves by meaning. It handles paraphrase but can blur precise terms and inherits errors from embedding, chunking, and index choices.

## Memory lifecycle

Persistent memory needs explicit rules for what is written, how it is retrieved, when it is updated, and when it is removed. Episodic records of prior interactions serve a different purpose from reusable knowledge or procedures. A memory store can help preserve context across tasks, but stale, incorrect, or irrelevant memories can also propagate mistakes into later decisions.

## Teaching extension

An assistant retrieves changing internal policy and also remembers user preferences.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
