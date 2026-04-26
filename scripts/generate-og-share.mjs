/**
 * SNS 用 OGP 画像を生成する（横長 1200x630、上部優先の cover トリミング）。
 * public/images/yakuridojo.png を元に public/images/og-share.png を出力。
 */
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const input = join(root, 'public', 'images', 'yakuridojo.png');
const outDir = join(root, 'public', 'images');
const output = join(outDir, 'og-share.png');

try {
  await access(input);
} catch {
  console.warn('[generate-og-share] skip: missing', input);
  process.exit(0);
}

const buf = await readFile(input);
await mkdir(outDir, { recursive: true });
const out = await sharp(buf)
  .resize(1200, 630, {
    fit: 'cover',
    position: 'top',
  })
  .png()
  .toBuffer();

await writeFile(output, out);
console.log('[generate-og-share] wrote', output, '(1200x630, position top)');
