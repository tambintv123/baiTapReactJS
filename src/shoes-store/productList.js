import React, { Component } from "react";
import ProductItem from "./productItem";
export default class ProductList extends Component {
  renderProductList = () => {
    const { productList } = this.props;
    return productList.map((item) => {
      return (
        <ProductItem
          key={item.id}
          productItem={item}
          setStateModal={this.props.setStateModal}
        />
      );
    });
  };
  render() {
    return (
      <div className="container m-auto row">{this.renderProductList()}</div>
    );
  }
}
