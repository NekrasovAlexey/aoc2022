import { getInput, getTestInput } from "../helpers/readInput.js";

const findUniqSubstring = (string, uniqLength = 4) => {
  for (let i = 0; i < string.length - uniqLength; i++) {
    const substring = string.substring(i, i + uniqLength);

    if (
      substring
        .split("")
        .every((letter, index) => !substring.includes(letter, index + 1))
    ) {
      return i + uniqLength;
    }
  }
};

console.log(findUniqSubstring(getTestInput()));
console.log(findUniqSubstring(getInput()));

console.log(findUniqSubstring(getTestInput(), 14));
console.log(findUniqSubstring(getInput(), 14));
