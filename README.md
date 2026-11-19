# news-image-18-nov-2026

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/radeisv/news-image-18-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/radeisv/news-image-18-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

A dense newspaper front page that sums up Wednesday 18 November 2026 in
one picture: 52 stories, 16 of them illustrated. A dark navy masthead
carries the date; below it, a segmented region bar (Asia 12 · Europe 10 ·
Americas 11 · Middle East 7 · Africa 4 · Oceania 2 · Global 6) and a UTC
timeline strip run the day from the overnight drones over Kuwait and
Bahrain to Anthropic's record IPO priced late in the day. Sixteen cards
cover the biggest stories — Iran's drones at the US base in Kuwait,
Trump landing in Shenzhen for the Xi–Putin talks, the EU's proposed
€45bn loan for Ukraine, Voyager 1 reaching one light-day, Israeli tanks
crossing the Yellow Line near Nuseirat, 141 drones over Ukraine, the Fed
minutes pointing to more hikes as the Dow fell 561, Jeffries winning the
Democrats' nod 251–11, UK inflation at 3.6%, Cyclone Akvan nearing
Odisha, Amnesty's El Obeid drone-strike report, the US–Venezuela
military pact, Anthropic's $83 IPO, Ebola passing 11,000 cases in DR
Congo, the US losing its measles-free status, and the COP31 split. A
dotted world map with 16 numbered pins, a HOW SURE proof box, and a
numbered "also on Wednesday" list in three columns add 36 more, from
the Quad meeting in Manila to the Ethiopia–Eritrea build-up near Badme.
A date-check box names the big stories first reported before Wednesday
that were deliberately left out — the Kerch Bridge collapse, Nvidia's
quarter, the Peltola call, the Knesset vote, Mongolia's president
resigning, the Prague crash, the Board of Peace's Gaza warning, and
COP31's first draft. Every story happened or was first reported on
18 November 2026; disputed claims are attributed. All drawings are
original.

## What changed vs round 1

Round 1 placed #98 of 9,072 (98.62% win rate, 12–0–0) — 48 places from
a reward. This revision rebuilds the page on the top-10 entries' shared
strengths and fixes round 1's weaknesses: 45 → 52 stories, 14 → 16
illustrated cards, the six weakest cards (Quad flags-on-a-table, Gaza
tents, Sanaa blobs, tanker bars, OPCW logo, Germany pyramid) re-drawn
as real scenes, maps and charts, and the Board of Peace card dropped —
the report was first submitted on Tuesday 17 November, so it now sits
in the date-check box and the Gaza card carries the day's ground push
instead. New: the UTC timeline, the HOW SURE proof box, the segmented
region bar with exact counts, and brief dots on the map. The
America-heavy briefs were rebalanced (18 of 45 → 11 of 52) and the
US-trivia briefs replaced with international stories.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This verifies `entry.png` (PNG, 1024×1024, under 1 MiB, complete IEND
chunk) and copies it to `out/entry.png`. In the grader it writes to
`/output/entry.png`.

---

<sub>Entry for the [make.fun](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) bounty "Sum up 18 November's world news in one image". New to make.fun? Join with referral code `f62prjm7`.</sub>
