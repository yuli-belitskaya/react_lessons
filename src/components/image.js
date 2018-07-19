import React, { Component } from 'react'


class Image extends Component {
    render() {
        return <img src={this.props.imageUrl} style={{width: this.props.width, height: this.props.height}} alt={this.props.title} />
    }
}

export default Image;