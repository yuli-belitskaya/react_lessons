import React, { Component } from 'react';
import { Context } from 'react';
import Image from './image';
import TextBox from "./textbox";
import Price from "./price";
import { Consumer } from "../../index";

class ProductCard extends Component {
    render() {
        return <span
                    style={{ border: '2px solid #09c9ee', background: '#fff', display: 'inline-block', margin: '5px'}}
                >
                <Image
                    title={this.props.product.title}
                    image={this.props.product.image}
                />
                <TextBox title={this.props.product.title}/>
                <Price price={this.props.product.price}/>
                <Consumer>
                    {allValue => (
                        <button
                            style={{
                                color: '#fff',
                                background: '#00435a',
                                display: 'block',
                                margin: '10px auto',
                                padding: '5px 20px',
                                fontSize: '20px',
                                border: 'none',
                                outline: 'none',
                                borderRadius: '20px',
                            }}
                            onClick={() => {
                                allValue.clickOnBtn(this.props.product)
                            }}
                        >BUY</button>
                    )}
                </Consumer>

                </span>
    }
}

export default ProductCard;