import React, { Component } from "react";
import "./baiTapOanTuXi.css";
import Player from "./Player";
import Computer from "./Computer";
import Result from "./Result";
import { connect } from "react-redux";
import { actRandom, actResult } from "../redux/actions/oanTuXi";

class OanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <Result />
            <button
              className="btn btn-success p-2 display-4 mt-5"
              onClick={() => this.props.playGame()}
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch(actRandom());
        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);

          dispatch(actResult());
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuXi);
