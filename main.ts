// Entry generator for One Word for Your Wi-Fi — outputs the single winning word deterministically.
// Writes the single winning Wi-Fi word to /output/entry.txt with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Routergeist");
