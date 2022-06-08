import React, { Component } from "react";
import { connect } from "react-redux";

class XiNgau extends Component {
  renderData = () => {
    const { mangXucXac } = this.props;
    return mangXucXac.map((item, index) => {
      return (
        <img
          key={index}
          width={50}
          height={50}
          src={item.hinhAnh}
          alt={item.hinhAnh}
        />
      );
    });
  };
  render() {
    return <div>{this.renderData()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps, null)(XiNgau);
