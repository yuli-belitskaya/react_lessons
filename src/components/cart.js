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
  width: '100px',
  padding: '5px',
  zIndex: '5',
};

class Cart extends Component {
  render() {
    return (
      <div>
        <CartContext.Consumer>
          {
            ({cart}) => {
              console.log(cart.addToCart);
              console.log(cart);
              return (
                <div>
                  <div style={cartStyle}>
                    Корзина: {cart.length}
                  </div>
                  <div style={{background: '#000'}}>
                    {cart}
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

export default Cart;
