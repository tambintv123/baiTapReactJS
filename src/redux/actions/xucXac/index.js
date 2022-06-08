import * as ActionType from "./../../constants/xucXac";

const actGetTaiXiu = (data) => {
  return {
    type: ActionType.TAIXIU,
    payload: data,
  };
};

const actPlayGame = () => {
  return {
    type: ActionType.PLAYGAME,
  };
};

export { actGetTaiXiu, actPlayGame };
