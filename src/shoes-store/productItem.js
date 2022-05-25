import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { productItem } = this.props;
    return (
      <>
        <div className="col-md-4 mt-5">
          <div className="card">
            <img className="card-img-top" src={productItem.image} alt="" />
            <div className="card-body">
              <h4 className="card-title">{productItem.name}</h4>
              <p className="card-text">{productItem.price} $</p>
              <button className="btn btn-success mr-2">Add to cart</button>
              <button
                className="btn btn-info"
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => {
                  this.props.setStateModal(productItem);
                  console.log(12);
                }}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
