// news-image-20261119 entry: "The World Today" — a newspaper-front-page
// poster summing up Thursday 19 November 2026 in one image (42 stories,
// 6 continents, one day). Three heroes lead (the Shenzhen trilateral, the
// Gulf war widening, the Kerch span falling), twelve featured stories
// follow in consensus order, 27 more sit in ALSO ON, and a world map pins
// every story to where it happened. The poster is drawn programmatically
// (Python PIL) so every headline is perfectly legible; this program only
// copies the finished image beside it to the grader's output directory,
// deterministically, byte for byte.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const IMAGE_FILE = "news-image entry.png";
const bytes = readFileSync(join(here, IMAGE_FILE));
if (bytes.length === 0) throw new Error(`${IMAGE_FILE} is empty`);
const target = join(outDir, "entry.png");
writeFileSync(target, bytes);
// Self-check: the copy must be byte-identical, so a second grader run
// (or a second read here) always sees the same image.
const again = readFileSync(target);
if (!again.equals(bytes)) throw new Error(`${target} does not match source`);
console.log(`wrote ${target} (${bytes.length} bytes)`);
