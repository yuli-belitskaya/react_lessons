import React, {Component} from 'react';
import Catalog from "./src/components/catalog";
import Cart from "./src/components/cart";
import ReactDOM from 'react-dom';
import CartContext from "./src/context/cart_context";
import ProductContext from "./src/context/product_context";
import productsList from "./src/constants/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cart: [], products: productsList};
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const cart = [...this.state.cart];

    const idx = cart.find((item) => {
      return product.id === item.id;
    });

    if (idx == null) {
      cart.push(product);
    }
    this.setState({cart});
  }

  render() {
    return (
      <div>
        <CartContext.Provider value={{
          cart: this.state.cart
        }}>
          <Cart/>
        </CartContext.Provider>
        <ProductContext.Provider value={{
          products: this.state.products,
          addToCart: this.addToCart,
        }}>
          <Catalog/>
        </ProductContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);