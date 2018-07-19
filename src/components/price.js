import React, { Component } from 'react'


class Price extends Component {
    render() {
        return <div style={{ textAlign: 'center', fontSize: '30px', margin: '5px 0', fontWeight: 'bold', color: '#980214'}}>{this.props.price}</div>
    }
}

export default Price;