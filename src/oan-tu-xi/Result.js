import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  renderResult = () => {
    const { result, win, played } = this.props;
    return (
      <div>
        <div className="display-4 text-warning">{result}</div>
        <div className="display-4 text-success">
          You win: <span className="text-warning">{win}</span>
        </div>
        <div className="display-4 text-success">
          You played: <span className="text-warning">{played}</span>
        </div>
      </div>
    );
  };
  render() {
    return <>{this.renderResult()}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.oanTuXiReducer.result,
    win: state.oanTuXiReducer.win,
    played: state.oanTuXiReducer.played,
  };
};

export default connect(mapStateToProps, null)(Result);
