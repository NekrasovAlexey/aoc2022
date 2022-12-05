import { getInput, getTestInput } from "../helpers/readInput.js";

const opponentChooseMap = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const yourChooseMap = {
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const outcomeMap = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

const shapePoints = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const outcomePoints = {
  lose: 0,
  draw: 3,
  win: 6,
};

const getOutcome = (a, b) => {
  if (a === b) {
    return "draw";
  }

  if (a === "rock") {
    return b === "paper" ? "win" : "lose";
  } else if (a === "paper") {
    return b === "scissors" ? "win" : "lose";
  } else {
    return b === "rock" ? "win" : "lose";
  }
};

const getYourChoose = (opponentChoose, expectedOutcome) => {
  if (expectedOutcome === "draw") {
    return opponentChoose;
  }

  if (opponentChoose === "rock") {
    return expectedOutcome === "win" ? "paper" : "scissors";
  } else if (opponentChoose === "paper") {
    return expectedOutcome === "win" ? "scissors" : "rock";
  } else {
    return expectedOutcome === "win" ? "rock" : "paper";
  }
};

const calculatePoints = (input, getRoundPoints) => {
  const rounds = input.split("\n");

  return rounds.reduce(
    (points, round) => points + getRoundPoints(round.split(" ")),
    0
  );
};

const rockPaperScissors = (input) =>
  calculatePoints(input, (choose) => {
    const opponentChoose = opponentChooseMap[choose[0]];
    const yourChoose = yourChooseMap[choose[1]];
    const outcome = getOutcome(opponentChoose, yourChoose);

    return shapePoints[yourChoose] + outcomePoints[outcome];
  });

const rockPaperScissorsV2 = (input) =>
  calculatePoints(input, (choose) => {
    const opponentChoose = opponentChooseMap[choose[0]];
    const expectedOutcome = outcomeMap[choose[1]];
    const yourChoose = getYourChoose(opponentChoose, expectedOutcome);

    return shapePoints[yourChoose] + outcomePoints[expectedOutcome];
  });

console.log(rockPaperScissors(getTestInput()));
console.log(rockPaperScissors(getInput()));
console.log(rockPaperScissorsV2(getTestInput()));
console.log(rockPaperScissorsV2(getInput()));
