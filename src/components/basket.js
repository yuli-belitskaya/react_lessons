import React, { Component } from 'react';
import {Consumer} from "../context/context";

const cartStyle = {
    background: 'rgb(84, 137, 162)',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    color: '#fff',
    fontWeight: '700',
    fontSize: '20px',
    padding: '5px',
};

class Cart extends Component {
    render() {
        return (
            <div style={cartStyle}>
                <Consumer>
                    {
                        ({ cart }) => {
                            return (
                                <div style={{width: '100%'}}>
                                    Корзина: {cart.length}
                                </div>
                            )
                        }
                    }
                </Consumer>
            </div>
        )
    }
}

export default Cart;
