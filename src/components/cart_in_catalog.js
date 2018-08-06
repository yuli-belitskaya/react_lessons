import React, {Component} from 'react';
import CartContext from "../context/cart_context";

const cartStyle = {
  background: 'rgb(84, 137, 177)',
  position: 'fixed',
  top: '0',
  right: '0',
  color: '#fff',
  fontWeight: '700',
  fontSize: '20px',
  width: '200px',
  padding: '5px',
  zIndex: '5',
};

class CartInCatalog extends Component {
  render() {
    return (
      <div>
        <CartContext.Consumer>
          {
            ({cart}) => {
              return (
                <div>
                  <div style={cartStyle}>
                    Товаров в корзине: {cart.length}
                  </div>
                </div>
              )
            }
          }
        </CartContext.Consumer>
      </div>
    )
  }
}

export default CartInCatalog;
