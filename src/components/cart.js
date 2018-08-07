import React, {Component} from 'react';
import CartContext from "../context/cart_context";
import CartItem from "./cart_item";

class Cart extends Component {
  render() {
    return (
      <div>
        <CartContext.Consumer>
          {
            ({cart}) => {
              const products = cart.map((product) => {
                return <CartItem key={product.id} product={product} />;
              });
              return (
                <div>
                  <div>
                    { products }
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
