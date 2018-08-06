import React, {Component} from 'react';
import CartContext from "../context/cart_context";

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
      <CartContext.Consumer>
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
      </CartContext.Consumer>
    )
  }
}

export default AddToCartButton;
