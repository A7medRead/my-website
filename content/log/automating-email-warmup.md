---
title: "Why we stopped tracking warm-up in a spreadsheet"
date: "2026-08-22"
category: "Technical"
excerpt: "Warm-up is one of the most important things you can get wrong in sending infrastructure — and one of the easiest to forget about, because it's slow and manual by nature. Here's what automating it actually fixed."
tags: ["email warm-up", "deliverability", "PMTA", "automation"]
---

Warm-up doesn't fail loudly. A new server or IP that skips proper warm-up doesn't throw an error — it just quietly builds a bad reputation from day one, and you don't find out until deliverability on that server is already a problem. That combination — critical, slow, and silent — is exactly the kind of process that gets skipped under pressure, which is why it kept ending up in a spreadsheet someone had to remember to update.

## Where the spreadsheet broke down

A spreadsheet works fine for one or two servers. It stops working once warm-up is running across a growing pool of infrastructure at different stages — some servers three days in, others three weeks in, each needing a different sending volume that day. Nobody was intentionally letting servers slip through incomplete; it happened because tracking twenty overlapping schedules by hand doesn't scale to the point where a missed update is rare. It scales to the point where it's expected.

## What the automation actually needed to do

The fix wasn't a smarter spreadsheet — it was removing the manual step entirely. The system needed to:

- Know the warm-up stage of every server without anyone checking
- Apply the right sending volume for that stage automatically, not as a manual daily task
- Flag failures and stalled progress the moment they happen, not at the next manual review
- Make status visible at a glance, across every server, in one place

Once warm-up became something the system tracked and enforced instead of something a person remembered to do, the actual failure mode changed. It stopped being "someone forgot to update the sheet" and became "the system flagged a stalled server before it mattered."

## The pattern behind it

This is the same shape as most infrastructure problems that seem like a discipline issue but are actually a tooling gap: the process wasn't failing because people were careless, it was failing because it depended on someone remembering something slow and unglamorous, every day, without fail. Automating it didn't just save time — it removed the one point where the whole system depended on human memory instead of the infrastructure itself.
