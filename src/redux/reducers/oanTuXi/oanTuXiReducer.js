import * as ActionType from "./../../constants/oanTuXi";

const initialState = {
  betArray: [
    { id: "keo", image: "./oanTuXi/keo.png", status: false },
    { id: "bua", image: "./oanTuXi/bua.png", status: true },
    { id: "bao", image: "./oanTuXi/bao.png", status: false },
  ],
  result: "Welcome !!!",
  win: 0,
  played: 0,
  computer: { id: "keo", image: "./oanTuXi/keo.png" },
};

const oanTuXiReducer = (state = initialState, action) => {
  let betArrayClone = [...state.betArray];
  //   const index = betArrayClone.findIndex((item) => item.id === action.payload);

  switch (action.type) {
    case ActionType.BET: {
      //reset && change status == false
      betArrayClone = betArrayClone?.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: true };
        }
        return { ...item, status: false };
      });

      state.betArray = betArrayClone;
      return { ...state };
    }

    case ActionType.RANDOM: {
      let randomNumber = Math.floor(Math.random() * 3);
      let random = betArrayClone[randomNumber];

      state.computer = random;
      return { ...state };
    }

    case ActionType.RESULT: {
      let player = state.betArray.find((item) => item.status === true);
      let computer = state.computer.id;

      switch (player.id) {
        case "keo": {
          if (computer === "keo") {
            state.result = "A draw battle  @.@ !!!";
          } else if (computer === "bua") {
            state.result = "You lose T.T !!! ";
          } else {
            state.result = "Congratulations !!! You win ><";
            state.win += 1;
          }
          break;
        }

        case "bao": {
          if (computer === "keo") {
            state.result = "You lose T.T !!!";
          } else if (computer === "bua") {
            state.result = "Congratulations !!! You win ><";
            state.win += 1;
          } else {
            state.result = "A draw battle  @.@ !!!";
          }
          break;
        }

        case "bua": {
          if (computer === "keo") {
            state.result = "Congratulations !!! You win ><";
            state.win += 1;
          } else if (computer === "bua") {
            state.result = "A draw battle  @.@ !!!";
          } else {
            state.result = "You lose T.T !!!";
          }
          break;
        }

        default:
          state.result = "Welcome";
      }
      state.played += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default oanTuXiReducer;
