import React, { Component } from 'react'


class Image extends Component {
    render() {
        const { image, title } = this.props;
        return <img src={image.imageUrl} style={{width: image.width, height: image.height}} alt={title} />
    }
}

export default Image;