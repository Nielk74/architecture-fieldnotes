# Chapter 6: Knowledge and Memory

*Pip’s adventure: The guide remembers the wrong address. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 4798–5524 in the supplied book.

Pip’s museum guide remembers an old delivery address beautifully—and uses it wrongly. Retrieval, working context, and persistent memory solve different problems. Pip chooses what to fetch, retain, update, or remove so yesterday’s useful information does not become today’s mistake.

## Context windows

Pip’s long conversation crowds out the visitor’s actual request. A context window limits one model invocation. Pip summarizes older turns but preserves the ticket ID, unresolved request, and relevant policy explicitly. Context engineering decides what to retain, retrieve, summarize, or discard.

## Full-text retrieval

Pip searches the museum maintenance manual for E-417. Keyword retrieval such as BM25 finds exact terms and names efficiently. It may miss paraphrases; ranking, chunks, and query wording shape the evidence returned. Pip tries broader wording only after checking the precise fault-code match.

## Semantic vectors

Pip hears “stop emails” and finds “Disable subscription notifications.” Embeddings represent text as dense vectors; nearest-neighbor search can match meaning across different wording. Precise terms can blur, and embedding, chunking, or index choices can fail. Pip checks that the retrieved article applies to this museum product.

## Memory lifecycle

Pip’s guide retrieves both the visitor’s old and new address. Persistent memory needs rules for writing, retrieval, updating, and removal. Episodes record prior interactions; reusable knowledge and procedures serve different purposes. Pip updates the active preference and filters stale or irrelevant records before they spread mistakes.

## Teaching extension

An assistant retrieves changing internal policy and also remembers user preferences.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
