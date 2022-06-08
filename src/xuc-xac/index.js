import React, { Component } from "react";
import "./baiTapXucXac.css";
import KetQua from "./KetQua";
import XiNgau from "./XiNgau";
import { connect } from "react-redux";
import { actGetTaiXiu, actPlayGame } from "./../redux/actions/xucXac";

class XucXac extends Component {
  render() {
    return (
      <div className="gameXucXac">
        <div className="display-1 text-center mt-5">Game Đỗ Xúc Xắc</div>
        <div className="row text-center">
          <div className="col-4">
            <button
              className="btnItem"
              onClick={() => this.props.getTaiXiu(true)}
            >
              Tai
            </button>
          </div>
          <div className="col-4">
            <XiNgau />
            <KetQua />
          </div>
          <div className="col-4">
            <button
              className="btnItem"
              onClick={() => this.props.getTaiXiu(false)}
            >
              Xiu
            </button>
          </div>
        </div>
        <div className="container d-flex">
          <button
            className="btn btn-success btnPlay"
            onClick={() => this.props.playGame()}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTaiXiu: (data) => {
      dispatch(actGetTaiXiu(data));
    },
    playGame: () => {
      dispatch(actPlayGame());
    },
  };
};

export default connect(null, mapDispatchToProps)(XucXac);
