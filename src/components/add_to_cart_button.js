import React, {Component} from 'react';
import ProductContext from "../context/product_context";

const btnStyle = {
  color: '#fff',
  background: '#00435a',
  display: 'block',
  margin: '10px auto',
  padding: '5px 20px',
  fontSize: '20px',
  border: 'none',
  outline: 'none',
  borderRadius: '20px',
};

class AddToCartButton extends Component {
  render() {
    return (
      <ProductContext.Consumer>
        {
          ({addToCart}) => {
            return (
              <button style={btnStyle}
                onClick={() => {
                  addToCart(this.props.product)
                }}>BUY
              </button>
            )
          }
        }
      </ProductContext.Consumer>
    )
  }
}

export default AddToCartButton;
