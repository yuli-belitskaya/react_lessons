import React, {Component} from 'react';
import Catalog from "./src/components/catalog";
import Cart from "./src/components/cart";
import ReactDOM from 'react-dom';
import {Provider} from "./src/context/context";
import productsList from "./src/constants/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cart: [], products: productsList};
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    let {cart} = JSON.parse(JSON.stringify(this.state));

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
        <Provider value={{
          cart: this.state.cart
        }}>
          <Cart/>
        </Provider>
        <Provider value={{
          products: this.state.products,
          addToCart: this.addToCart,
        }}>
          <Catalog/>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);