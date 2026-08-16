---
title: "Why your emails land in spam (even when nothing looks wrong)"
date: "2026-07-14"
category: "Technical"
excerpt: "Deliverability isn't one setting — it's a chain of trust signals. Here's how I diagnose spam placement when a campaign that used to work suddenly doesn't."
tags: ["deliverability", "PMTA", "email infrastructure"]
---

Most people troubleshoot deliverability backwards. A campaign starts landing in spam, and the instinct is to check the email content first — subject line, links, spammy words. Content matters, but by the time you're debugging a live drop in inbox placement, content is rarely the actual cause. The cause is almost always trust, and trust is built (or broken) somewhere in the sending chain.

## The chain, in order

When I'm diagnosing a deliverability problem, I check things in this order — because each layer can mask problems in the ones below it.

1. **Authentication** — SPF, DKIM, DMARC. If any of these are misaligned, everything downstream is compromised. A passing SPF with a failing DKIM is still a red flag to most filters.
2. **IP and domain reputation** — is the sending IP on any blacklists? Has the domain's reputation dropped because of a spike in complaints or bounces?
3. **Sending patterns** — sudden volume spikes, sending to old or purchased lists, inconsistent sending schedules. Mailbox providers watch for *change*, not just bad behavior.
4. **Engagement signals** — opens, clicks, and — critically — how many people are deleting without opening, or marking as spam.
5. **Content** — only after the above are clean does content actually move the needle.

## The part most people skip: seed testing

You can have perfect authentication and still not know your actual inbox placement, because Gmail, Outlook, and Yahoo don't tell you where a message landed. That's what seed testing is for — sending to a controlled panel of mailboxes across providers and checking, per server and per domain, whether the message reached the inbox, spam, or somewhere ambiguous.

I run this as a scheduled, automated system rather than a manual spot-check, for one simple reason: deliverability problems are rarely permanent — they're often a 6-hour window where a specific IP's reputation dipped. If you're only checking manually once a day, you miss the window where the data would actually help you.

## What actually moves the needle

In practice, the fixes that recover deliverability fastest are boring:

- Pausing sends from the specific server/domain combination that's degraded, not the whole operation
- Re-warming gradually instead of resuming at full volume
- Segmenting out the least-engaged portion of a list before the next send, not after

None of this is exotic. The leverage isn't in knowing a secret trick — it's in having the monitoring in place to *see* the problem within minutes instead of days, and reacting to the specific layer that broke instead of guessing.
