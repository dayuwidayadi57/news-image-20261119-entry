# news-image-20261119-entry

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/dayuwidayadi57/news-image-20261119-entry/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/dayuwidayadi57/news-image-20261119-entry/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

"The World in One Day — Thursday 19 November 2026" — a newspaper front page that sums up Thursday 19 November 2026 in a single 1024×1024 image: 42 stories across 6 continents, so a judge with no news feed can read the whole day from the image alone. Three hero stories lead in the day's consensus order (the Shenzhen trilateral, the GTA VI launch, the record Anthropic IPO), twelve featured stories follow, a BY THE NUMBERS strip pulls out the day's six figures, a region-count bar shows where the news fell, a DATE CHECK box names the big stories deliberately left out because they were first reported on 18 November, a world map pins every story to where it happened, and an ALSO ON list carries the remaining 27 stories. Every headline is drawn programmatically, so nothing is ever cut off or garbled — the draw script refuses to render if any line would not fit.

Round 2 (this commit) corrects the round-1 poster ("The World Today", scored 983.452, rank #93, 2.192 points below the top-50 line): the heroes are now the three stories every top-10 entry led with, the Gulf war and the Kerch span drop to featured cards #4–5, and the date discipline is fixed — the Peltola win and the EU €45bn loan plan are no longer presented as 19 November news.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=dp1radt1&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>

## About

This repository is the entry for the [news-image-20261119](https://make.fun/bounty/news-image-20261119) competition on make.fun: one image summing up 19 November 2026's world news. Homepage: https://make.fun — topic: `makefun`.

## The forty-two stories (all reported on 19 November 2026)

Design: bold navy masthead with a red breaking ticker, three illustrated hero panels, a navy BY THE NUMBERS strip, twelve illustrated feature cards, a DATE CHECK box, a pinned world map, and the ALSO ON list — the broadsheet pattern that led the 17 and 18 November editions, with the day's three biggest stories in the correct consensus order (Shenzhen summit, GTA VI launch, Anthropic IPO).

**The three heroes**

1. **Trump, Xi and Putin meet in Shenzhen** — First trilateral of the three leaders; nuclear arms control on the agenda. (ASIA • DIPLOMACY)
2. **GTA VI launches worldwide after 13 years** — 99 on Metacritic; 15.9m pre-orders; New Zealand plays first at midnight. (AMERICAS • CULTURE)
3. **Anthropic debuts in biggest IPO on record** — $83 a share; $81.3bn raised; valued near $1.5tn. (AMERICAS • MARKETS)

**Featured, in consensus order**

4. **US strikes Qeshm as Iran hits Kuwait and Bahrain** — Drones hit US bases; a tanker is struck in Hormuz. (MIDDLE EAST • GULF WAR)
5. **Kerch span falls; Ukraine hits two more refineries** — Road arch drops into the strait; Kirishi refinery burns. (EUROPE • UKRAINE WAR)
6. **Berlin talks: Witkoff and Kushner meet Kyiv's allies** — Coalition of the Willing gathers as E5 joins the table. (UNITED STATES • DIPLOMACY)
7. **Ebola passes 11,000 cases as DRC fight stalls** — 400–500 new cases a week; 5,400 dead in six months. (AFRICA • HEALTH)
8. **US loses measles-free status after 26 years** — PAHO: measles endemic again in the US, Mexico and Bolivia. (AMERICAS • HEALTH)
9. **Nvidia halts H200 chip sales to China** — Interim chief Kress ends the Huang–Trump export deal. (MARKETS • TECH)
10. **COP31 draft urges faster fossil-fuel action** — $120bn for adaptation as talks open in Antalya. (GLOBAL • CLIMATE)
11. **Cold threatens Gaza's tent camps** — IOM warns of hypothermia deaths without winter shelter. (MIDDLE EAST • GAZA)
12. **FAA halts departures nationwide** — Routers probed after a coast-to-coast ground stop. (UNITED STATES • AVIATION)
13. **Cyclone Akvan nears India's east coast** — Winds of 145 km/h; 200,000 evacuated in Odisha. (ASIA • WEATHER)
14. **Stocks slide as VIX jumps to 25.46** — CAC −1.6%, DAX −2.1%, S&P −1.0%; Brent $91.55. (MARKETS • ECONOMY)
15. **Canada and China widen financial access** — Carney and Xi renew the currency swap in Shenzhen. (AMERICAS • TRADE)

**Also on, 16–42:** Target sales rise 7.1% to $27.1bn · Brazil: tax reform may lift prices · EU urges stronger clean-energy vows · 8,000 hoax threats hit European schools · France hit by public-sector strike · Serbia seats a new parliament · Knesset picks a new speaker · ICJ rules on Rohingya genocide case · Iraq restarts a key oil pipeline · Mondlane trial opens in Mozambique · South Africa hit by mass shootings · Strike reported in West Kordofan · Russian jets probed near Japan · Prague rallies over public-media funding · Estonia shuts its border with Russia · Drones hit ships near Romania · Houthis press on Aden's edge · Rwanda return hub opens · Haiti rallies fill the streets · Garment strikes spread in Bangladesh · Guatemala under a state of siege · Fatal fire in Phuket · New Zealand plays GTA VI first · EU pauses long-term UK talks over Brexit · Trump unhappy Vance did not back Iran war · US plans tougher green-card rules · Xi pitches China as free-trade anchor.

**Date check — left out on purpose.** First reported on 18 November, not today: Jeffries elected Speaker 251–11 · Peltola takes Alaska · Voyager 1 passes one light-day · EU €45bn Ukraine loan · Iran drone interceptions.

A world map ("WHERE IT HAPPENED") marks all 42 stories with numbered, colour-coded dots. Region counts: Americas 14 · Europe 11 · Asia 6 · Middle East 5 · Africa 5 · Oceania 1. BY THE NUMBERS: $81.3bn Anthropic IPO · 15.9m GTA VI pre-orders · 200,000 Odisha evacuated · 730,000 Rohingya displaced · 99 Metacritic · 11,000+ Ebola cases.

Sources (checked 2026-11-19 via news search): Reuters, AP, AFP, BBC, Al Jazeera, WHO, UN.

## How it works

`main.ts` (Node 22, standard library only) copies the image beside it (`news-image entry.png`) to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` outside the grader). The program runs twice and writes identical bytes.

## The image

- 1024×1024 PNG, 205,869 bytes (gate: at most 1 MiB, at most 1024×1024)
- sha256: d8edca0ffc2fc3a38fd5ec5dff2e2c937c8ba16dca0341c1f3d32575a54c2935
- Drawn programmatically (Python PIL, `draw_poster_v3.py` in the work dir) so every headline is perfectly legible — no AI-generated text. Reads clearly at 300 pixels across. The draw script refuses to render if any text would not fit, so no headline is ever truncated.
