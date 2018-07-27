import React, { Component } from 'react';
import Catalog from "./src/components/catalog";
import Cart from "./src/components/basket";
import ReactDOM from 'react-dom';
import {Provider} from "./src/context/context";
import productsList from "./src/constants/Products";


class Header extends Component {
    render() {
        return (
            <div
                style={{
                    border: '1px solid #000',
                    marginTop: '34px',
                    textAlign: 'center' }}
            >
                {this.props.children}
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { cart: [], products: productsList };
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart (product) {
        let { cart } = Object.assign({}, this.state);
        const idx = cart.indexOf(product);
        if (idx === -1) {
            cart.push(product);
        }
        this.setState({ cart });

    }

    render() {
        return (
            <div>
                <Provider value={{
                    cart: this.state.cart,
                    products: this.state.products,
                    clickOnBtn: this.addToCart,


                }}>
                    <Cart />
                    <Catalog />
                </Provider>
            </div>
        );
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
);