import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { productDetail } = this.props;
    return (
      <div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Detail</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{productDetail.name}</td>
                    </tr>
                    <tr>
                      <td>Alias</td>
                      <td>{productDetail.alias}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{productDetail.price} $</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{productDetail.description}</td>
                    </tr>
                    <tr>
                      <td>Short Description</td>
                      <td>{productDetail.shortDescription}</td>
                    </tr>
                    <tr>
                      <td>Quantity</td>
                      <td>{productDetail.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
