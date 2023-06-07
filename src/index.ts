import readline from "readline";

import generatePassword from "./modules/password-generator.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Password length: ", (length: string) => {
  rl.question(
    "Include uppercase letters (Y/N)? ",
    (includeUppercase: string) => {
      rl.question("Include numbers (Y/N)? ", (includeNumbers: string) => {
        const parsedLength = parseInt(length, 10);
