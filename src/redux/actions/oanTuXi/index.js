import * as ActionType from "./../../constants/oanTuXi";

const actBet = (data) => {
  return {
    type: ActionType.BET,
    payload: data,
  };
};

const actRandom = () => {
  return {
    type: ActionType.RANDOM,
  };
};

const actResult = () => {
  return {
    type: ActionType.RESULT,
  };
};

export { actBet, actRandom, actResult };
