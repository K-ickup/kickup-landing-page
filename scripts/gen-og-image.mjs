import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

// 1200×630 — safe zone for all platforms
const W = 1200;
const H = 630;

const SVG = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
  xmlns="http://www.w3.org/2000/svg">

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#0D1117"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="6" height="${H}" fill="#1A5CFF"/>

  <!-- K logo mark  (scaled from 40×40 viewBox to ~120px) -->
  <g transform="translate(96, 215) scale(3)">
    <rect width="40" height="40" rx="10" fill="#1A5CFF"/>
    <line x1="13" y1="10" x2="13" y2="30" stroke="white" stroke-width="4"
      stroke-linecap="round"/>
    <polyline points="13,21 28,11" fill="none" stroke="white" stroke-width="4"
      stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="19,17 28,30" fill="none" stroke="white" stroke-width="4"
      stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Wordmark -->
  <text x="240" y="285"
    font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif"
    font-size="72" font-weight="700" fill="white" letter-spacing="-2">
    Kickup
  </text>

  <!-- Tagline line 1 -->
  <text x="240" y="358"
    font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif"
    font-size="28" font-weight="400" fill="#94A3B8" letter-spacing="-0.5">
    Développement sur-mesure et IA appliquée
  </text>

  <!-- Tagline line 2 -->
  <text x="240" y="400"
    font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif"
    font-size="28" font-weight="400" fill="#94A3B8" letter-spacing="-0.5">
    pour PME et ETI
  </text>

  <!-- Domain badge -->
  <rect x="240" y="454" width="220" height="44" rx="8" fill="#1A5CFF" fill-opacity="0.18"/>
  <text x="350" y="482"
    font-family="system-ui, -apple-system, Helvetica, Arial, sans-serif"
    font-size="22" font-weight="600" fill="#1A5CFF" text-anchor="middle"
    letter-spacing="0.5">
    kickup.studio
  </text>
</svg>`;

await sharp(Buffer.from(SVG))
  .resize(W, H)
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, "og-image.png"));

console.log("public/og-image.png (1200×630)  ✓");
