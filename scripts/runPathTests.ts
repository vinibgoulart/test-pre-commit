import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const files: string[] = execSync("git diff --name-only --cached")
  .toString()
  .split("\n")
  .filter(Boolean);

const testDirectories = new Set<string>();

files.forEach((file) => {
  const testsPath = path.join(path.dirname(file), "__tests__");

  if (fs.existsSync(testsPath)) {
    return testDirectories.add(testsPath);
  } 
  
  if (path.dirname(file).includes("__tests__")) {
    return testDirectories.add(path.dirname(file));
  }
});

testDirectories.forEach((directory) => {
  console.log(`Running tests in ${directory}`);
  execSync(`yarn jest ${directory}`);
});
