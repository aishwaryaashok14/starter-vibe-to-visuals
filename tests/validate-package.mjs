import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import vm from "node:vm";

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const guide = read("index.html");
const projectInstructions = read("PROJECT-INSTRUCTIONS.md");
const designTemplate = read("templates/DESIGN-TEMPLATE.md");
const consistencyCheck = read("templates/CONSISTENCY-CHECK.md");
const readme = read("README.md");
const facilitator = read("FACILITATOR-RUN-OF-SHOW.md");
const routeSkill = read(".agents/skills/vibe-to-visuals/SKILL.md");

const storeStart = guide.indexOf("    const storeRoute={");
const storeEnd = guide.indexOf("\n    };", storeStart) + 7;
const storeRoute = guide.slice(storeStart, storeEnd);
const storeHash = crypto.createHash("sha256").update(storeRoute).digest("hex");
assert.equal(
  storeHash,
  "60b46b0d5c4555c85db53ffa66a941b33fe354080ca4ba4216e388645ae8d5ed",
  "The working physical-store route changed."
);

const digitalStart = guide.indexOf("    function digitalRoute(kind){");
const digitalEnd = guide.indexOf("\n    const routes=", digitalStart);
const digitalRoute = guide.slice(digitalStart, digitalEnd);

assert.match(digitalRoute, /Google Stitch/);
assert.match(digitalRoute, /DESIGN\.md/);
assert.match(digitalRoute, /focused (user|customer )?journey/i);
assert.match(digitalRoute, /three real Stitch moments/i);
assert.match(digitalRoute, /Import <code>DESIGN\.md<\/code> into Google Stitch/);
assert.match(digitalRoute, /public Netlify URL/);
assert.match(digitalRoute, /\$vibe-to-visuals/);
assert.doesNotMatch(digitalRoute, /experience-screens\.png|contact sheet/i);
assert.doesNotMatch(digitalRoute, /Ask Sites to build exactly/i);
assert.doesNotMatch(digitalRoute, /DESIGN-KIT\.md/);
assert.doesNotMatch(digitalRoute, /exactly three connected/i);

assert.match(projectInstructions, /create one file named `DESIGN\.md`/);
assert.match(projectInstructions, /import `DESIGN\.md` into Google Stitch/i);
assert.match(projectInstructions, /Netlify option/);
assert.doesNotMatch(projectInstructions, /experience-screens\.png|contact sheet named/i);
assert.match(projectInstructions, /screens and states needed/i);
assert.doesNotMatch(projectInstructions, /exactly three connected screens or journey moments/i);

assert.match(designTemplate, /## Focused journey/);
assert.match(designTemplate, /Three selected visual moments/);
assert.doesNotMatch(designTemplate, /Three-screen journey/);

assert.match(consistencyCheck, /Stitch prototype/);
assert.match(consistencyCheck, /selected visual moments/);
assert.match(readme, /Google Stitch/);
assert.match(readme, /publish it to Netlify/);
assert.match(facilitator, /preflight Google Stitch/i);
assert.match(facilitator, /public Netlify URL/);
assert.match(routeSkill, /physical-product store, a software app, or a service experience/);
assert.match(routeSkill, /STORE-KIT\.md/);
assert.match(routeSkill, /DESIGN\.md/);
assert.match(routeSkill, /public Netlify URL/);

const elements = new Map();
const makeElement = (id = "") => ({
  id,
  textContent: "",
  innerHTML: "",
  value: "",
  checked: false,
  placeholder: "",
  dataset: {},
  childNodes: [{ nodeValue: "" }],
  style: {},
  addEventListener() {},
  classList: { add() {}, remove() {} }
});
const getElement = (id) => {
  if (!elements.has(id)) elements.set(id, makeElement(id));
  return elements.get(id);
};
const checks = ["prepare", "store", "reference", "website", "social", "video", "check"].map((name) => {
  const element = makeElement();
  element.dataset.check = name;
  return element;
});
const saves = ["productSet", "customerMoment", "tasteBoundary"].map((id) => {
  const element = getElement(id);
  element.dataset.save = "";
  return element;
});
const storage = new Map();
const document = {
  body: { dataset: {} },
  getElementById: getElement,
  querySelectorAll(selector) {
    if (selector === "[data-check]") return checks;
    if (selector === "[data-save]") return saves;
    if (selector === "[data-copy]") return [];
    return [];
  }
};
const localStorage = {
  getItem(key) { return storage.get(key) ?? null; },
  setItem(key, value) { storage.set(key, value); },
  removeItem(key) { storage.delete(key); }
};
const script = guide.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, "Guide script not found.");
const context = { document, localStorage, location: { reload() {} }, navigator: { clipboard: { async writeText() {} } }, setTimeout() {} };
vm.runInNewContext(`${script}\n;globalThis.__routeTest={applyRoute,routes};`, context);

context.__routeTest.applyRoute("app");
assert.match(getElement("prepareAction").textContent, /Google Stitch/);
assert.match(getElement("referencePrompt").childNodes[0].nodeValue, /Import DESIGN\.md into Google Stitch/);
assert.match(getElement("step4Action").innerHTML, /Netlify/);
assert.match(getElement("pomelliHelp").textContent, /Netlify URL/);
assert.match(getElement("step5Action").textContent, /In Pomelli/);
assert.match(getElement("flowHelp").innerHTML, /three individual Stitch captures/);
assert.equal(getElement("websitePrompt").hidden, true);
assert.equal(getElement("step4DigitalSteps").hidden, false);
assert.equal(getElement("socialOptions").open, true);
assert.equal(getElement("sourceLabel").textContent, "DESIGN.MD");

context.__routeTest.applyRoute("service");
assert.match(getElement("referencePrompt").childNodes[0].nodeValue, /focused customer journey/);

context.__routeTest.applyRoute("store");
assert.match(getElement("prepareAction").textContent, /Sites/);
assert.match(getElement("referencePrompt").childNodes[0].nodeValue, /^Read STORE-KIT\.md/);
assert.equal(getElement("websitePrompt").hidden, false);
assert.equal(getElement("step4DigitalSteps").hidden, true);
assert.equal(getElement("socialOptions").open, false);
assert.equal(getElement("sourceLabel").textContent, "STORE KIT");

console.log("Package validation passed.");
