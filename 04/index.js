import { getInput, getTestInput } from "../helpers/readInput.js";

const getRange = (stringRange) => stringRange.split("-").map(Number);

const getGroups = (input) =>
  input.split("\n").map((line) => {
    const groups = line.split(",");

    return [getRange(groups[0]), getRange(groups[1])];
  });

const isFullOverlap = ([[firstStart, firstEnd], [secondStart, secondEnd]]) => {
  const secondContainsFirst =
    firstStart >= secondStart &&
    firstStart <= secondEnd &&
    firstEnd >= secondStart &&
    firstEnd <= secondEnd;
  const firstContainsSecond =
    secondStart >= firstStart &&
    secondStart <= firstEnd &&
    secondEnd >= firstStart &&
    secondEnd <= firstEnd;

  return secondContainsFirst || firstContainsSecond;
};

const isPartialOverlap = ([[firstStart, firstEnd], [secondStart, secondEnd]]) =>
  (firstStart >= secondStart && firstStart <= secondEnd) ||
  (firstEnd >= secondStart && firstEnd <= secondEnd);

const isOverlap = (group) => isFullOverlap(group) || isPartialOverlap(group);

const getFullOverlapCount = (groups) => groups.filter(isFullOverlap).length;

const getOverlapCount = (groups) => groups.filter(isOverlap).length;

console.log(getFullOverlapCount(getGroups(getTestInput())));
console.log(getFullOverlapCount(getGroups(getInput())));

console.log(getOverlapCount(getGroups(getTestInput())));
console.log(getOverlapCount(getGroups(getInput())));
