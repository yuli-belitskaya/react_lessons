import React, { Component } from 'react';
import ProductCard from "./product_card";
import {Consumer} from "../context/context";


class Catalog extends Component {
    render() {
        return (
            <div style={{ background: '#f4fd5e', marginTop: '33px'}}>
                <Consumer>
                    {
                        ({ products }) => {
                            const productCardFunc = (item) => {
                                return <ProductCard key={item.id} product={item}/>
                            };
                            return products.map(productCardFunc);
                        }
                    }
                </Consumer>
            </div>

            )

    }
}

export default Catalog;