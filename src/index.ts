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
        const parsedIncludeUppercase = includeUppercase.toUpperCase() === "Y";
        const parsedIncludeNumbers = includeNumbers.toUpperCase() === "Y";

        const password = generatePassword(
          parsedLength,
          parsedIncludeUppercase,
          parsedIncludeNumbers
        );

        console.log(`Generated Password: ${password}`);

        rl.close();
      });
