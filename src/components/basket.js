import React, { Component } from 'react';
import { Consumer } from '../../index';



class Basket extends Component {
    render() {
        return (
            <div style={{
                background: 'rgb(84, 137, 162)',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                color: '#fff',
                fontWeight: '700',
                fontSize: '20px',
                padding: '5px',
            }}>
                <Consumer>
                    {allValue => (
                        <div style={{width: '100%'}}>
                           Корзина: {allValue.product.length}
                        </div>
                        )}
                </Consumer>
            </div>

        )

    }
}

export default Basket;
