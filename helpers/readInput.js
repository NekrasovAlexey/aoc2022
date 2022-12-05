import { readFileSync } from "fs";

const readFile = (fileName) => readFileSync(fileName).toString();

export const getTestInput = () => readFile("testInput");

export const getInput = () => readFile("input");
