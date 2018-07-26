import React, { Component } from 'react'
import { context } from 'react';
import Catalog from "./src/components/catalog";
import Basket from "./src/components/basket";
import ReactDOM from 'react-dom';



export const {Provider, Consumer} = React.createContext();

class Header extends Component {
    render() {
        return (
            <div
                style={{ border: '1px solid #000', marginTop: '34px', textAlign: 'center' }}
            >
                {this.props.children}
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { productsInCart: [] };
        this.toCart = this.toCart.bind(this);
    }
    toCart (product) {
        let allProducts = this.state.productsInCart;
        allProducts.push(product);
        this.setState({productInCart: product});
    }
    render() {
        return (
            <div>
                <Provider value={{
                    product: this.state.productsInCart,
                    clickOnBtn: this.toCart,


                }}>
                    <Header>
                        <Catalog />
                        <Basket />
                    </Header>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
);