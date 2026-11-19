// News-image entry for make.fun "Sum up 18 November's world news in one
// image" (competition news-image-20261118, Node 22, standard library only).
// A dense newspaper front page — dark navy masthead, 14 illustrated cards
// (4 large + 5 + 5 small), one numbers strip, a dotted world map with 14
// numbered pins, and a 31-item "also on Wednesday" list in 2 columns:
// 45 stories from Wednesday 18 November 2026 in one 1024x1024 picture.
// The finished image is the entry.png beside this file; the program
// verifies it and copies it to /output/entry.png, exactly the bytes the
// judge sees. No network, no randomness: the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dst = join(outDir, 'entry.png');

if (!existsSync(src)) {
  throw new Error(`entry.png missing next to main.ts (${src})`);
}
const bytes = readFileSync(src);
if (bytes.length < 8 || bytes[0] !== 0x89 || bytes[1] !== 0x50 ||
    bytes[2] !== 0x4e || bytes[3] !== 0x47) {
  throw new Error('entry.png is not a PNG (bad magic bytes)');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`image is ${width}x${height}, over the 1024x1024 limit`);
}
if (bytes.length > 1024 * 1024) {
  throw new Error(`image is ${bytes.length} bytes, over the 1 MiB limit`);
}
// The file must end with a complete IEND chunk: 4 zero length bytes,
// the letters IEND, then the 4-byte CRC.
if (bytes.readUInt32BE(bytes.length - 12) !== 0 ||
    bytes.subarray(bytes.length - 8, bytes.length - 4).toString('latin1') !== 'IEND') {
  throw new Error('image is truncated: no trailing IEND chunk');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
const copied = statSync(dst).size;
if (copied !== bytes.length) {
  throw new Error(`copy mismatch: wrote ${copied} bytes, expected ${bytes.length}`);
}
// Revision: verify the copy itself, not just its size — re-read the
// destination and compare its sha256 with the source's, so a partial
// or corrupted write fails loudly instead of reaching the judge.
const sha = createHash('sha256').update(bytes).digest('hex');
const copiedSha = createHash('sha256').update(readFileSync(dst)).digest('hex');
if (copiedSha !== sha) {
  throw new Error(`copy hash mismatch: ${copiedSha.slice(0, 12)}... != ${sha.slice(0, 12)}...`);
}
console.log(
  `news-image-20261118: front page, 45 stories, ${width}x${height} PNG, ` +
  `${bytes.length} bytes, sha256 ${sha.slice(0, 12)}... -> ${dst}`,
);
