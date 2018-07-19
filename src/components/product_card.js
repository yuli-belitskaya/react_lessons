import React, { Component } from 'react'
import Image from './image';
import TextBox from "./textbox";
import Price from "./price";

class ProductCard extends Component {
    render() {
        return <span
                    style={{ border: '2px solid #09c9ee', background: '#fff', display: 'inline-block', margin: '5px'}}
                >
                <Image
                    title={this.props.product.title}
                    width={this.props.product.width}
                    height={this.props.product.height}
                    imageUrl={this.props.product.imageUrl}
                />
                <TextBox title={this.props.product.title}/>
                <Price price={this.props.product.price}/>
                </span>
    }
}

export default ProductCard;