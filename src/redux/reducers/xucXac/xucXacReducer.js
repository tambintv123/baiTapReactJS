import * as ActionType from "./../../constants/xucXac";

const initialState = {
  taiXiu: true, //true: tai` (tu 3 den 11); false: xiu (tu 11 tro di)
  mangXucXac: [
    { ma: 1, hinhAnh: "./xucXac/1.png" },
    { ma: 1, hinhAnh: "./xucXac/1.png" },
    { ma: 1, hinhAnh: "./xucXac/1.png" },
  ],
  banThang: 0,
  soBanChoi: 0,
};

const xucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TAIXIU: {
      state.taiXiu = action.payload;

      return { ...state };
    }

    case ActionType.PLAYGAME: {
      // show 3 xuc xac
      let mangXucXacClone = [];
      for (let i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * 6) + 1;
        let xucXacNgauNhien = { ma: number, hinhAnh: `./xucXac/${number}.png` };

        mangXucXacClone.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacClone;
      state.soBanChoi += 1;

      // xu ly win game
      let soDiem = mangXucXacClone.reduce(
        (total, item) => (total += item.ma),
        0
      );

      if (
        (soDiem > 11 && state.taiXiu === true) ||
        (soDiem <= 11 && state.taiXiu === false)
      ) {
        state.banThang += 1;
      }
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default xucXacReducer;
