import {  writeFileSync } from "node:fs";

const res = await fetch("https://next-reviews-cms.encoded.io/api/reviews");
const data = await res.json();

writeFileSync("test/json-text.mjs", JSON.stringify(data), "utf8");