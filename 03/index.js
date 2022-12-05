import { getInput, getTestInput } from "../helpers/readInput.js";

const getPriority = (letter) => {
  const code = letter.charCodeAt();

  // 1-26 for a-z and 27-52 for A-Z
  return 97 <= code && code <= 122 ? code - 96 : code - 38;
};

const findTheSameItem = (content) => {
  const middle = content.length / 2;
  const firstCompartment = content.substring(0, middle);
  const secondCompartment = content.substring(middle);

  return firstCompartment
    .split("")
    .find((element) => secondCompartment.includes(element));
};

const findPrioritySum = (input) => {
  const contents = input.split("\n");

  return contents.reduce(
    (sum, content) => sum + getPriority(findTheSameItem(content)),
    0
  );
};

// TODO: create stats array with length of group and reuse in findTheSameItem
const findTheSameItemInGroup = (group) => {
  const itemsMap = {};

  group.forEach((rucksack, index) => {
    rucksack.split("").forEach((item) => {
      if (!itemsMap[item]) {
        itemsMap[item] = [0, 0, 0];
      }

      itemsMap[item][index]++;
    });
  });

  return Object.entries(itemsMap).find(([_, stats]) =>
    stats.every((count) => Boolean(count))
  )[0];
};

const findGroupPrioritySum = (input) => {
  const contents = input.split("\n");

  const groups = [];
  for (let i = 0; i < contents.length; i = i + 3) {
    groups.push([contents[i], contents[i + 1], contents[i + 2]]);
  }

  return groups.reduce(
    (sum, group) => sum + getPriority(findTheSameItemInGroup(group)),
    0
  );
};

console.log(findPrioritySum(getTestInput()));
console.log(findPrioritySum(getInput()));
console.log(findGroupPrioritySum(getTestInput()));
console.log(findGroupPrioritySum(getInput()));
