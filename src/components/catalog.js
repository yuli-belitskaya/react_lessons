import React, {Component} from 'react';
import ProductCard from "./product_card";
import ProductContext from "../context/product_context";

class Catalog extends Component {
  render() {
    return (
      <div style={{background: '#f4fd5e', marginTop: '33px'}}>
        <ProductContext.Consumer>
          {
            ({products}) => {
              return products.map((item) => {
                return <ProductCard key={item.id} product={item}/>
              });
            }
          }
        </ProductContext.Consumer>
      </div>
    )
  }
}

export default Catalog;