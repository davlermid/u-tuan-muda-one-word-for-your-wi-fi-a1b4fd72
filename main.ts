// Writes the winning one-word Wi-Fi name to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Routergeist");
