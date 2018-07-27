import React, { Component } from 'react';
import {Consumer} from "../context/context";

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

class Button extends Component {
    render() {
        return (
            <Consumer>
                {
                    ({clickOnBtn}) => {
                        return (
                            <button style={btnStyle}
                                onClick={() => {
                                    clickOnBtn(this.props.product)
                                }}>BUY
                            </button>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default Button;
