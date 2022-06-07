import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  renderDataComputer = () => {
    const { computer } = this.props;
    return (
      <img
        style={{
          position: "absolute",
          animation: `randomItem${Date.now()} 0.5s `,
          transform: "rotate(120deg)",
          left: 32,
        }}
        className="mt-4"
        width={80}
        height={80}
        src={computer.image}
        alt={computer.image}
      />
    );
  };
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -20px}
      25% {top: 30px}
      50% {top: -20px}
      75% {top: 30px}
      100% {top: 0px}
    }`;
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <style>{keyframe}</style>
          <div className="thinking">{this.renderDataComputer()}</div>
          <div className="speech-bubble"></div>
          <img
            className="player"
            src="./oanTuXi/playerComputer.png"
            alt="/oanTuXi/playerComputer.png"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.oanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps, null)(Computer);
