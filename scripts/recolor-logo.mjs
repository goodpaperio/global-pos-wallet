#!/usr/bin/env node
/**
 * Recolor wireframe logo: cyan/teal -> gold & light orange, make background transparent.
 * Usage: node scripts/recolor-logo.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Gold and light orange (RGB)
const GOLD = { r: 212, g: 168, b: 59 };       // hsl(43 74% 49%)
const LIGHT_ORANGE = { r: 232, g: 155, b: 74 }; // hsl(32 85% 55%)

const inputPath = join(root, "..", "..", ".cursor", "projects", "Users-zuludykes-code-global-pos-wallet", "assets", "idw3_logo_chatgpt-1a446b16-3e06-4ada-acf8-c4657f400359.png");
const outputPath = join(root, "public", "idw3-logo-gold.png");

async function main() {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3] ?? 255;

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const sum = r + g + b;
    const isCyanTeal = g > 70 && b > 70 && r < Math.max(g, b);
    const isLine = isCyanTeal || (a > 100 && sum > 100);
    const isBackground = sum < 90 || (!isLine && a < 150);

    if (isBackground) {
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      data[i + 3] = 0;
    } else if (isLine) {
      const t = luminance;
      data[i] = Math.round(GOLD.r * t + LIGHT_ORANGE.r * (1 - t));
      data[i + 1] = Math.round(GOLD.g * t + LIGHT_ORANGE.g * (1 - t));
      data[i + 2] = Math.round(GOLD.b * t + LIGHT_ORANGE.b * (1 - t));
      data[i + 3] = 255;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log("Written:", outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
