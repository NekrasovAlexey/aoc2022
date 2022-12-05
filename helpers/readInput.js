import { readFileSync } from "fs";

const readFile = (fileName) => readFileSync(fileName).toString().trimEnd();

export const getTestInput = () => readFile("testInput");

export const getInput = () => readFile("input");
