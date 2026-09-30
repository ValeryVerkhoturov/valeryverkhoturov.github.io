import { readFileSync, writeFileSync } from "node:fs";
import React, { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

const html = renderToString(
  <StrictMode>
    <App />
  </StrictMode>,
);

const path = "dist/index.html";
const page = readFileSync(path, "utf8");
const marker = '<div id="root"></div>';

if (!page.includes(marker)) {
  throw new Error(`root placeholder not found in ${path}`);
}

writeFileSync(path, page.replace(marker, `<div id="root">${html}</div>`));
console.log(`prerendered ${html.length} chars into ${path}`);
