# news-image-18-nov-2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/radeisv/news-image-18-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/radeisv/news-image-18-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A dense newspaper front page that sums up Wednesday 18 November 2026 in
one picture: 42 stories, 13 of them illustrated. A dark navy masthead
carries the date; below it, a thick segmented region bar (Asia 12 ·
Europe 7 · Americas 7 · Middle East 7 · Africa 4 · Oceania 2 · Global
3) and a "THE DAY IN NUMBERS" strip (Voyager 1's 25.9bn km, 204,070
people identified for evacuation ahead of Cyclone Akvan, Anthropic's
$83 IPO price, Jeffries' 251–11 caucus vote). Three large cards lead
— Iranian drones intercepted over Kuwait, Xi greeting Trump in
Shenzhen, Voyager 1 reaching one light-day — followed by ten medium
cards, each with a big in-image number or label, and 29 one-line briefs
in two columns beside a beige land-mass world map with 13 numbered
pins. A date-check box names the stories left out on purpose because
they first appeared before Wednesday.

## What changed vs round 2 (and why)

Round 2 (52 stories, 16 cards, 3-column 9pt briefs) placed #923 of
9,808 (98.0122%). The judge's own reasons named the cause: at ~300px
its small headlines, timeline strip, HOW SURE box and three-column
briefs collapsed into an illegible wall of print. Round 3 trades
breadth for legibility: 52 → 42 stories, 16 → 13 cards, 36 → 29
briefs, and the freed space goes to type — 22pt top-row headlines,
18pt medium headlines, a big in-image number on every medium card
(€45bn, 141, −561, 251–11, 3.6%, 47,000, 37 KILLED, 11,000+), and the
numbers strip. Cut: the UTC timeline strip, the HOW SURE box, and the
three weakest cards (Anthropic, Measles, COP31 — now briefs, with
Anthropic's $83 still carried by the numbers strip). The map is
rebuilt as beige land masses with a dark outline instead of pale dots.

## Run

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) checks `entry.png` (PNG,
1024×1024, at most 1 MiB, complete IEND chunk) and copies it byte for
byte to `/output/entry.png`, verifying the copy by SHA-256. Set
`MAKEFUN_OUTPUT_DIR` to write somewhere else. No network, no
randomness: identical bytes on every run.

## Stories

Every story on the page happened, or was first reported, on Wednesday
18 November 2026. Contested claims are attributed. Original drawings.
Sources: AP · Reuters · AFP · BBC · Al Jazeera · ONS · IMD · NASA ·
WHO · Amnesty.
