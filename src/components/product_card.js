import React, {Component} from 'react';
import Image from './image';
import TextBox from "./textbox";
import Price from "./price";
import AddToCartButton from "./add_to_cart_button";

const prodCardStyle = {
  border: '2px solid #09c9ee',
  background: '#fff',
  display: 'inline-block',
  margin: '5px'
};

class ProductCard extends Component {
  render() {
    const {title, price, image} = this.props.product;
    return <span
      style={prodCardStyle}
    >
      <Image
        title={title}
        image={image}
      />
      <TextBox title={title}/>
      <Price price={price}/>
      <AddToCartButton product={this.props.product}/>
    </span>
  }
}

export default ProductCard;