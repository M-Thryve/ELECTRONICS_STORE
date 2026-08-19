/**
 * Content Mapping Validation
 *
 * Ensures every destination referenced in template.content.mapping.json
 * resolves to a value in the app/content content object tree.
 *
 * Usage:
 *   node scripts/validate-content.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const mappingPath = join(root, "template", "template.content.mapping.json");
const contentDir = join(root, "app", "content");

// --- Load the mapping ---
const mapping = JSON.parse(readFileSync(mappingPath, "utf8"));
const destinations = new Set();
for (const entry of Object.values(mapping.mapping)) {
  destinations.add(entry.destination);
}

// --- Load content objects (mirror of app/content/index.ts exports) ---
// Use the built app/content/index.ts via tsx so TS + path aliases resolve.
const modules = {
  site: await import("../app/content/site.ts"),
  home: await import("../app/content/home.ts"),
  shop: await import("../app/content/shop.ts"),
  product: await import("../app/content/product.ts"),
  collections: await import("../app/content/collections.ts"),
  cart: await import("../app/content/cart.ts"),
  support: await import("../app/content/support.ts"),
  account: await import("../app/content/account.ts"),
  misc: await import("../app/content/misc.ts"),
};

const roots = {};
for (const mod of Object.values(modules)) {
  for (const [key, value] of Object.entries(mod)) {
    if (typeof value === "object" && value !== null) {
      roots[key] = value;
      roots[toPascalCase(key)] = value;
    }
  }
}

function toPascalCase(str) {
  if (str === "notFound") return "NotFound";
  if (str === "orderTracking") return "OrderTracking";
  if (str === "storeLocator") return "StoreLocator";
  if (str === "faq") return "FAQ";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// --- Resolve a dotted destination against a root ---
function resolve(destination) {
  const parts = destination.split(".");
  // e.g. "Home.Hero.heading" -> root "home" -> hero.heading
  const rootKey = parts[0];
  const root = roots[rootKey];
  if (!root) return { ok: false, reason: `no content root for "${rootKey}"` };

  let node = root;
  for (const part of parts.slice(1)) {
    if (node == null || typeof node !== "object" || !(part in node)) {
      return {
        ok: false,
        reason: `missing "${parts.slice(1, parts.indexOf(part) + 1).join(".")}" under ${rootKey}`,
      };
    }
    node = node[part];
  }
  return { ok: true, value: node };
}

// --- Validate ---
const failures = [];
for (const dest of [...destinations].sort()) {
  const result = resolve(dest);
  if (!result.ok) {
    failures.push({ destination: dest, reason: result.reason });
  }
}

console.log(`Validating ${destinations.size} mapped destinations against content objects...\n`);

if (failures.length === 0) {
  console.log(`✓ All ${destinations.size} mapped intake fields have a content destination.`);
  process.exit(0);
}

for (const f of failures) {
  console.log(`✗ ${f.destination}  →  ${f.reason}`);
}
console.log(`\n${failures.length} unresolved destination(s).`);
process.exit(1);