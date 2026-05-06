import { readFileSync } from "node:fs";

const files = [
  "schemas/prompt-runtime.schema.json",
  "examples/crm-support/templates/case-summary.prompt.json",
  "examples/crm-support/contexts/case-001.json",
  "examples/crm-support/outputs/case-001.expected.json"
];

for (const file of files) {
  JSON.parse(readFileSync(file, "utf8"));
  console.log(`valid json: ${file}`);
}

