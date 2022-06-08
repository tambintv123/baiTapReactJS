import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    return (
      <div className="content">
        <div className=" title text-uppercase">
          bạn chọn:{" "}
          <span className="text-danger">
            {this.props.taiXiu ? "Tai" : "Xiu"}
          </span>
        </div>
        <div className=" title">
          Số bàn thắng:{" "}
          <span className="text-success">{this.props.banThang}</span>
        </div>
        <div className=" title">
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.xucXacReducer.taiXiu,
    banThang: state.xucXacReducer.banThang,
    soBanChoi: state.xucXacReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(KetQua);
