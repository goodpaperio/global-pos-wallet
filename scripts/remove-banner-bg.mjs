#!/usr/bin/env node
/**
 * Remove white/light background from banner image; output PNG with transparency.
 * Usage: node scripts/remove-banner-bg.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const inputPath = join(root, "public", "idw3-banner.png");
const outputPath = join(root, "public", "idw3-banner.png");

// Pixels with all channels above this become transparent (0-255)
// Lower = more aggressive (removes more light/white)
const WHITE_THRESHOLD = 185;

async function main() {
  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3] ?? 255;

    const isWhite = r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;
    if (isWhite) {
      data[i + 3] = 0;
    } else {
      data[i + 3] = a;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log("Done:", outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
