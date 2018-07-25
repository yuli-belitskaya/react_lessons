import React, { Component } from 'react';
import ProductCard from "./product_card";
import productsList from "../constants/Products";

class Catalog extends Component {
    render() {
        const products = productsList.map((item) => {
            return <ProductCard key={item.id} product={item}/>
        });
        return (
            <div style={{ background: '#f4fd5e'}}>
                {products}
            </div>
            )

    }
}

export default Catalog;