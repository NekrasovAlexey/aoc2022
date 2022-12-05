import { getInput, getTestInput } from "../helpers/readInput.js";

const parseInitialState = (initialState) =>
  initialState
    .split("\n")
    .reverse()
    .reduce((state, line, index) => {
      if (!index) {
        const stackCount = line.trim().split(/ +/g).length;

        return Array(stackCount)
          .fill(null)
          .map(() => []);
      }

      for (let stackIndex = 0; stackIndex < state.length; stackIndex++) {
        // cut letter. Skip all previous and [
        const block = line
          .substring(stackIndex * 4 + 1, stackIndex * 4 + 2)
          .trim();

        if (block) {
          state[stackIndex].push(block);
        }
      }

      return state;
    }, []);

const parseProcedure = (procedure) =>
  procedure.split("\n").map((step) => {
    const [_, count, from, to] = /\w+\s(\d+)\s\w+\s(\d+)\s\w+\s(\d+)/.exec(
      step
    );

    return {
      count: Number(count),
      from: Number(from) - 1,
      to: Number(to) - 1,
    };
  });

const move9000 = (state, procedure) => {
  procedure.forEach(({ count, from, to }) => {
    for (let i = 0; i < count; i++) {
      const movedElement = state[from].pop();
      state[to].push(movedElement);
    }
  });

  return state;
};

const move9001 = (state, procedure) => {
  procedure.forEach(({ count, from, to }) => {
    const fromLength = state[from].length;
    const startIndex = fromLength - count;

    state[to].push(...state[from].slice(startIndex, fromLength));
    state[from].splice(startIndex, count);
  });

  return state;
};

const getOnTop = (input, move) => {
  const [initialState, procedure] = input.split("\n\n");

  const result = move(
    parseInitialState(initialState),
    parseProcedure(procedure)
  );

  return result.reduce((res, stack) => {
    const topElement = stack[stack.length - 1];

    if (topElement) {
      res += topElement;
    }

    return res;
  }, "");
};

const getOnTop9000 = (input) => getOnTop(input, move9000);

const getOnTop9001 = (input) => getOnTop(input, move9001);

console.log(getOnTop9000(getTestInput()));
console.log(getOnTop9000(getInput()));

console.log(getOnTop9001(getTestInput()));
console.log(getOnTop9001(getInput()));
