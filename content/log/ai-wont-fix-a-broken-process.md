---
title: "AI won't fix a broken process — it will just break it faster"
date: "2026-05-19"
category: "Ideas"
excerpt: "Every business I talk to wants to 'add AI' somewhere. The ones who get value from it are the ones who fix the process first."
tags: ["AI automation", "operations", "opinion"]
---

The most common request I get isn't "build me an AI system." It's "add AI to this" — where "this" is a process that's already unreliable, poorly defined, or held together by one person's memory of how it's supposed to work. That request, taken literally, usually makes things worse, not better.

## Automation doesn't fix ambiguity, it multiplies it

A manual process with an unclear step still gets caught, eventually, because a human doing it notices when something looks wrong and asks a question. An automated version of the same process doesn't ask questions. It executes the ambiguous step exactly the same way, every time, at whatever speed and scale you gave it — including at 3 AM, including a thousand times before anyone notices.

I've seen this play out directly: a reporting process that occasionally miscounted because of an edge case nobody had documented. As a manual weekly task, it was wrong maybe once a quarter, and someone caught it. Automated without fixing the underlying logic first, it would have been wrong every single day, silently, because nothing was watching for the mistake anymore.

## What "fixing the process first" actually means

It's not a call for months of process documentation before you're allowed to touch automation. It's smaller and more practical than that:

- Know exactly what "done correctly" looks like for the task, in specific, checkable terms
- Know what the failure modes are — not hypothetically, but the ones that have actually happened
- Have a way to notice when the automated version fails, because it will eventually hit a case you didn't plan for

If you can't describe those three things about a process, that's the actual work to do before adding AI to it — not a blocker to automation, but the design spec for it.

## Where AI genuinely earns its place

The systems I've built that actually stuck weren't the ones that replaced a person's judgment. They were the ones that removed the *boring, well-defined, high-volume* parts of a job — running the same deliverability test every day, generating the same report from five data sources, watching a hundred servers for the same failure pattern — and left the judgment calls to the person who could actually make them.

That's a less exciting pitch than "AI automation," but it's the version that survives contact with a real operation.
