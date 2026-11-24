// Fortune Cookie Wisdom for Developers — make.fun entry.
//
// Writes one original fortune-cookie line for a software developer to
// /output/entry.txt. Deterministic, stdlib only, no network.
//
// The line (96 characters, one line, no trailing newline):
//   The intern will fix in an afternoon the bug you have owned for a year,
//   and smile while doing it.
//
// Why this line: it reads like a fortune cookie (one short balanced
// sentence, a small prophecy), it says something true a tired senior
// engineer recognises (fresh eyes fix the bug you have lived with for a
// year — the new hire who finds in minutes what the old hands missed),
// and it turns that truth in a way the field has not heard: the narrator
// is the humbled senior, not the hero. The twist lands in the last words
// ("and smile while doing it") and "owned" carries a quiet double
// meaning — the bug you owned as yours, and the bug that owned you.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The intern will fix in an afternoon the bug you have owned for a year, and smile while doing it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
