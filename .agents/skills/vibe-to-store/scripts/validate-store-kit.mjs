import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] || ".");
const file = path.join(root, "STORE-KIT.md");
const findings = [];
let text = "";

try {
  text = await fs.readFile(file, "utf8");
} catch (error) {
  findings.push(`Missing STORE-KIT.md: ${error.message}`);
}

const requiredHeadings = [
  "Store promise",
  "Customer and moment",
  "Commercial position",
  "Chosen direction",
  "Product collection",
  "Visual rules",
  "Voice and campaign copy",
  "Non-negotiables",
  "Avoid",
];

for (const heading of requiredHeadings) {
  if (!new RegExp(`^## ${heading}\\s*$`, "mi").test(text)) findings.push(`Missing section: ${heading}`);
}

function sectionBody(name) {
  const heading = `## ${name}`;
  const start = text.indexOf(heading);
  if (start < 0) return "";
  const afterHeading = text.slice(start + heading.length);
  const next = afterHeading.search(/\n## /);
  return next < 0 ? afterHeading : afterHeading.slice(0, next);
}

const productSection = sectionBody("Product collection");
const productRows = productSection
  .split("\n")
  .filter((line) => /^\|/.test(line.trim()))
  .filter((line) => !/^\|\s*(ID|---)/i.test(line.trim()));
if (productRows.length !== 3) findings.push(`Product collection must contain exactly three product rows; found ${productRows.length}`);

for (const [index, row] of productRows.entries()) {
  const cells = row.split("|").slice(1, -1).map((cell) => cell.trim());
  if (cells.length !== 10) findings.push(`Product ${index + 1} must contain 10 fields; found ${cells.length}`);
  if (cells.some((cell) => !cell)) findings.push(`Product ${index + 1} contains a blank field`);
}

const hexes = text.match(/#[0-9A-Fa-f]{6}\b/g) || [];
if (new Set(hexes.map((hex) => hex.toUpperCase())).size !== 5) findings.push("Visual rules must contain exactly five distinct hex colours");

for (const label of ["Hero headline", "Supporting line", "Social line", "Video beat 1", "Video beat 2", "Video beat 3"]) {
  if (!new RegExp(`^- ${label}:\\s*\\S`, "mi").test(text)) findings.push(`Missing campaign copy: ${label}`);
}

const avoidSection = sectionBody("Avoid");
const avoidItems = avoidSection.split("\n").filter((line) => /^-\s+\S/.test(line));
if (avoidItems.length < 4) findings.push("Avoid section must contain at least four concrete items");

if (findings.length) {
  console.error(JSON.stringify({ status: "fail", file, findings }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: "pass", file, products: productRows.length, palette: 5, sourceFiles: 1 }, null, 2));
