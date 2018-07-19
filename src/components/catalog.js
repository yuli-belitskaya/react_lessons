import React, { Component } from 'react';
import ProductCard from "./product_card";
import productsList from "../constants/Products";

class Catalog extends Component {
    render() {
        let products = [];
        for (let item of productsList) {
            products.push(
                <ProductCard product={item}/>
            )
        }
        return (
            <div style={{ background: '#f4fd5e'}}>
                {products}
            </div>
            )

    }
}

export default Catalog;