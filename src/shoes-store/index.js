import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./productList";
import Modal from "./modal";
export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: data,
      productDetail: data[0],
    };
  }
  setStateModal = (productItem) => {
    this.setState({
      productDetail: productItem,
    });
  };

  render() {
    const { productList, productDetail } = this.state;
    return (
      <div className="d-flex align-items-center justify-content-between">
        <ul className="d-flex flex-column nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="pill" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#shop">
              Shop
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane container active" id="home">
            <h1 className="text-center">Shoes Shop</h1>
            <ProductList
              productList={productList}
              setStateModal={this.setStateModal}
            />
            <Modal productDetail={productDetail} />
          </div>
          <div className="tab-pane container fade" id="shop">
            ...
          </div>
        </div>
      </div>
    );
  }
}
