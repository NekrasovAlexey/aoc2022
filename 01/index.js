import { getInput, getTestInput } from "../helpers/readInput.js";

const getSortedCalories = (input) => {
  const elves = input.split("\n\n");

  const caloriesByElf = elves.map((elve) =>
    elve.split("\n").reduce((sum, calories) => sum + Number(calories), 0)
  );

  return caloriesByElf.sort((a, b) => b - a);
};

const getTopCalories = (input) => getSortedCalories(input)[0];

const getSumTop3Calories = (input) => {
  const sortedCalories = getSortedCalories(input);

  return sortedCalories[0] + sortedCalories[1] + sortedCalories[2];
};

console.log(getTopCalories(getTestInput()));
console.log(getTopCalories(getInput()));

console.log(getSumTop3Calories(getTestInput()));
console.log(getSumTop3Calories(getInput()));
