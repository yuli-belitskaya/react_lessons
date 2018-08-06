import React, {Component} from 'react';
import ProductCard from "./product_card";
import productList from '../constants/Products';

class Catalog extends Component {
  constructor() {
    super();
    this.state = { products: productList };
  }
  render() {
    const products = this.state.products.map((item) => {
      return <ProductCard key={item.id} product={item}/>
    });
    return (
      <div style={{background: '#f4fd5e'}}>
        {products}
      </div>
    )
  }
}

export default Catalog;