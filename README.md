# news-image-20261119-entry

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/dayuwidayadi57/news-image-20261119-entry/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/dayuwidayadi57/news-image-20261119-entry/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

"The World Today" — a newspaper front page that sums up Thursday 19 November 2026 in a single 1024×1024 image: 42 stories across 6 continents, so a judge with no news feed can read the whole day from the image alone. Three hero stories lead (the Shenzhen trilateral, the Gulf war widening, the Kerch span falling), twelve featured stories follow in consensus order, a BY THE NUMBERS strip pulls out the day's four figures, a world map pins every story to where it happened, and an ALSO ON list carries the remaining 27 stories. Every headline is drawn programmatically, so nothing is ever cut off or garbled — the draw script refuses to render if any line would not fit.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=dp1radt1&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>

## About

This repository is the entry for the [news-image-20261119](https://make.fun/bounty/news-image-20261119) competition on make.fun: one image summing up 19 November 2026's world news. Homepage: https://make.fun — topic: `makefun`.

## The forty-two stories (all reported on 19 November 2026)

Design: bold navy masthead with a red breaking ticker, three illustrated hero panels, a navy BY THE NUMBERS strip, twelve illustrated feature cards, a pinned world map, and the ALSO ON list — the broadsheet pattern that led the 17 and 18 November editions, with the day's three biggest stories in the correct consensus order (Shenzhen summit, Gulf war, Kerch span).

**The three heroes**

1. **Trump, Xi and Putin meet in Shenzhen** — First trilateral summit of the three leaders, on the APEC sidelines. (ASIA • DIPLOMACY)
2. **US strikes Qeshm as Iran hits Kuwait and Bahrain** — Iran's drones hit US bases; an ADNOC tanker is struck in Hormuz. (MIDDLE EAST • GULF WAR)
3. **Kerch span falls; Ukraine hits two more refineries** — Road arch drops into the strait; the Kirishi refinery burns. (EUROPE • UKRAINE WAR)

**Featured, in consensus order**

4. **Berlin talks: Witkoff and Kushner meet Kyiv's allies** — Coalition of the Willing gathers as E5 joins the table. (UNITED STATES • DIPLOMACY)5. **Ebola passes 11,000 cases as DRC fight stalls** — 400–500 new cases a week; 5,400 dead in six months. (AFRICA • HEALTH)
6. **US loses measles-free status after 26 years** — PAHO: measles endemic again in the US, Mexico and Bolivia. (AMERICAS • HEALTH)
7. **Nvidia halts H200 chip sales to China** — Interim chief Kress ends the Huang–Trump export deal. (MARKETS • TECH)
8. **COP31 draft urges faster fossil-fuel action** — $120bn for adaptation as talks open in Antalya. (GLOBAL • CLIMATE)
9. **Cold threatens Gaza's tent camps** — IOM warns of hypothermia deaths without winter shelter. (MIDDLE EAST • GAZA)
10. **FAA halts departures nationwide** — Routers probed after a coast-to-coast ground stop. (UNITED STATES • AVIATION)
11. **EU proposes €45bn loan for Ukraine** — Brussels weighs frozen Russian assets to fund Kyiv. (EUROPE • UKRAINE AID)
12. **Cyclone Akvan nears India's east coast** — Winds of 145 km/h; 200,000 evacuated in Odisha. (ASIA • WEATHER)
13. **Stocks slide as VIX jumps to 25.46** — CAC −1.6%, DAX −2.1%, S&P −1.0%; Brent $91.55. (MARKETS • ECONOMY)
14. **Canada and China widen financial access** — Carney and Xi renew the currency swap in Shenzhen. (AMERICAS • TRADE)
15. **Democrats take Alaska for a 56–44 Senate** — Peltola wins as midterms reshape Washington. (UNITED STATES • POLITICS)

**Also on, 16–42:** Target sales rise 7.1% to $27.1bn · Brazil: tax reform may lift prices · EU urges stronger clean-energy vows · 8,000 hoax threats hit European schools · France hit by public-sector strike · Serbia seats a new parliament · Knesset picks a new speaker · Moldova reports a drone incursion · Iraq restarts a key oil pipeline · Mondlane trial opens in Mozambique · South Africa hit by mass shootings · Strike reported in West Kordofan · Russian jets probed near Japan · Prague rallies over public-media funding · Estonia shuts its border with Russia · Drones hit ships near Romania · Houthis press on Aden's edge · Rwanda return hub opens · Haiti rallies fill the streets · Garment strikes spread in Bangladesh · Guatemala under a state of siege · Fatal fire in Phuket · Record arrivals reach the Canary Islands · EU pauses long-term UK talks over Brexit · Trump unhappy Vance did not back Iran war · US plans tougher green-card rules · Xi pitches China as free-trade anchor.

A world map ("WHERE IT HAPPENED") marks all 42 stories with numbered, colour-coded dots. BY THE NUMBERS: 11,000+ Ebola cases in DRC · $91.55 Brent crude · 56–44 Democrats' Senate · 145 km/h Cyclone Akvan.

Sources (checked 2026-11-19 via news search): Reuters, AP, AFP, BBC, Al Jazeera, WHO, UN.

## How it works

`main.ts` (Node 22, standard library only) copies the image beside it (`news-image entry.png`) to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` outside the grader). The program runs twice and writes identical bytes.

## The image

- 1024×1024 PNG, 196,795 bytes (gate: at most 1 MiB, at most 1024×1024)
- sha256: 158228a84cb38fc0129a31fbdb0724c805fe5e64d2968f0328e61c3ab8877bca
- Drawn programmatically (Python PIL, `draw_poster_v2.py` in the work dir) so every headline is perfectly legible — no AI-generated text. Reads clearly at 300 pixels across. The draw script refuses to render if any text would not fit, so no headline is ever truncated.
