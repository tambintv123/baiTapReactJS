import React, { Component } from "react";
import { connect } from "react-redux";
import { actBet } from "./../redux/actions/oanTuXi";

class Player extends Component {
  renderListData = () => {
    const { betArray } = this.props;
    return betArray.map((item) => {
      let border = {};

      if (item.status) {
        border = { border: "3px solid orange" };
      }

      return (
        <div className="col-4" key={item.id}>
          <button
            style={border}
            className="btnItem"
            onClick={() => this.props.bet(item.id)}
          >
            <img width={35} height={35} src={item.image} alt={item.image} />
          </button>
        </div>
      );
    });
  };

  renderData = () => {
    const { betArray } = this.props;
    return (
      <img
        style={{ transform: "rotate(120deg)" }}
        className="mt-4"
        width={80}
        height={80}
        src={betArray.find((item) => item.status === true).image}
        alt={betArray.find((item) => item.status === true).image}
      />
    );
  };
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="thinking">{this.renderData()}</div>
        <div className="speech-bubble"></div>
        <img
          className=" player"
          src="./oanTuXi/player.png"
          alt="/oanTuXi/player.png"
        />
        <div className="row">{this.renderListData()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    betArray: state.oanTuXiReducer.betArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bet: (data) => {
      dispatch(actBet(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
