import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short family scene: warm, funny, heartfelt. One line, inside the
// competition gate of 1-280 characters.
const TEXT =
  "My grandfather still saves the last bite of dessert for my grandmother, fifty years in, then eats it himself and says, 'She told me to.'";

// Enforce the competition gate ourselves: 1-280 characters, one or two lines.
const lineCount = TEXT.split("\n").length;
if (TEXT.length < 1 || TEXT.length > 280 || lineCount < 1 || lineCount > 2) {
  throw new Error(
    `entry outside gate: ${TEXT.length} chars, ${lineCount} lines (need 1-280 chars, 1-2 lines)`,
  );
}

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
