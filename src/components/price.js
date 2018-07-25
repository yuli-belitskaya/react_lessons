import React, { Component } from 'react'


class Price extends Component {
    render() {
        const price = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(this.props.price);
        return (
            <div style={{
                textAlign: 'center',
                fontSize: '30px',
                margin: '5px 0',
                fontWeight: 'bold',
                color: '#980214'
            }}>{price}</div>
        )
    }
}

export default Price;