// Round-2 entry for make.fun "Sum up 18 November's world news in one
// image" (competition news-image-20261118, Node 22, standard library only).
//
// A dense newspaper front page for Wednesday 18 November 2026: a navy
// masthead, a segmented region bar (52 stories across 7 regions), a UTC
// timeline strip, 16 illustrated cards (4 large + 6 + 6 small, each a
// scene, map or chart with a proof tag), a dotted world map with 16
// numbered pins plus dots for the briefs, a HOW SURE box, a 36-item
// "also on Wednesday" list in 3 columns, and an expanded date-check box
// naming the stories deliberately left out because they first appeared
// before Wednesday. 52 stories in one 1024x1024 picture.
//
// The finished image is entry.png beside this file; this program checks
// it and copies it to /output/entry.png — byte for byte what the judge
// sees. No network, no randomness: identical bytes on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(dir, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(targetDir, 'entry.png');
const MAX_BYTES = 1024 * 1024;
const MAX_SIDE = 1024;

if (!existsSync(sourcePath)) {
  throw new Error(`entry.png not found next to main.ts (${sourcePath})`);
}
const png = readFileSync(sourcePath);

// PNG signature: 89 50 4E 47 0D 0A 1A 0A.
const signature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const badSig = signature.some((b, i) => png[i] !== b);
if (png.length < 8 || badSig) {
  throw new Error('entry.png is not a PNG (bad signature)');
}
const w = png.readUInt32BE(16);
const h = png.readUInt32BE(20);
if (w !== MAX_SIDE || h !== MAX_SIDE) {
  throw new Error(`image is ${w}x${h}, expected ${MAX_SIDE}x${MAX_SIDE}`);
}
if (png.length > MAX_BYTES) {
  throw new Error(`image is ${png.length} bytes, over the 1 MiB limit`);
}
// A complete PNG ends with an empty IEND chunk: length 0, the letters
// IEND, then the chunk CRC.
const iendLen = png.readUInt32BE(png.length - 12);
const iendTag = png.subarray(png.length - 8, png.length - 4).toString('latin1');
if (iendLen !== 0 || iendTag !== 'IEND') {
  throw new Error('image is truncated: no trailing IEND chunk');
}

mkdirSync(targetDir, { recursive: true });
// Revision: refuse to copy the file onto itself — if MAKEFUN_OUTPUT_DIR
// ever points at this repository directory, copying entry.png over
// entry.png would truncate the source instead of producing an output.
if (resolve(targetPath) === resolve(sourcePath)) {
  throw new Error(`refusing to copy entry.png onto itself (${targetPath})`);
}
copyFileSync(sourcePath, targetPath);
const written = statSync(targetPath).size;
if (written !== png.length) {
  throw new Error(`copy size mismatch: wrote ${written} bytes, expected ${png.length}`);
}
// Verify the copy itself, not just its size: hash the destination and
// compare it with the source, so a partial or corrupted write fails
// loudly instead of reaching the judge.
const sourceHash = createHash('sha256').update(png).digest('hex');
const copiedHash = createHash('sha256').update(readFileSync(targetPath)).digest('hex');
if (copiedHash !== sourceHash) {
  throw new Error(
    `copy hash mismatch: ${copiedHash.slice(0, 12)}... != ${sourceHash.slice(0, 12)}...`,
  );
}
console.log(
  `news-image-20261118 round 2: front page, 52 stories (16 drawn + 36 briefs), ` +
  `${w}x${h} PNG, ${png.length} bytes, sha256 ${sourceHash.slice(0, 12)}... -> ${targetPath}`,
);
