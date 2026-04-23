import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SVG = `<svg width="512" height="512" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="10" fill="#1A5CFF"/>
  <line x1="13" y1="10" x2="13" y2="30" stroke="white" stroke-width="4" stroke-linecap="round"/>
  <polyline points="13,21 28,11" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="19,17 28,30" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function buildICO(images, sizes) {
  const count = images.length;
  const DIR_ENTRY = 16;
  const headerAndDir = 6 + DIR_ENTRY * count;

  let offset = headerAndDir;
  const offsets = images.map((img) => {
    const o = offset;
    offset += img.length;
    return o;
  });

  const buf = Buffer.alloc(offset);
  buf.writeUInt16LE(0, 0); // reserved
  buf.writeUInt16LE(1, 2); // type: ICO
  buf.writeUInt16LE(count, 4);

  for (let i = 0; i < count; i++) {
    const base = 6 + i * DIR_ENTRY;
    const s = sizes[i];
    buf.writeUInt8(s >= 256 ? 0 : s, base);
    buf.writeUInt8(s >= 256 ? 0 : s, base + 1);
    buf.writeUInt8(0, base + 2);
    buf.writeUInt8(0, base + 3);
    buf.writeUInt16LE(1, base + 4);
    buf.writeUInt16LE(32, base + 6);
    buf.writeUInt32LE(images[i].length, base + 8);
    buf.writeUInt32LE(offsets[i], base + 12);
  }

  for (let i = 0; i < count; i++) images[i].copy(buf, offsets[i]);
  return buf;
}

const svgBuf = Buffer.from(SVG);
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

const [p16, p32, p180] = await Promise.all([
  sharp(svgBuf).resize(16, 16).png().toBuffer(),
  sharp(svgBuf).resize(32, 32).png().toBuffer(),
  sharp(svgBuf).resize(180, 180).png().toBuffer(),
]);

fs.writeFileSync(path.join(publicDir, "favicon-16x16.png"), p16);
fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), p32);
fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), p180);

const ico = buildICO([p16, p32], [16, 32]);
fs.writeFileSync(path.join(appDir, "favicon.ico"), ico);

console.log("favicon-16x16.png  ✓");
console.log("favicon-32x32.png  ✓");
console.log("apple-touch-icon.png (180×180)  ✓");
console.log("app/favicon.ico (16+32 px)  ✓");
