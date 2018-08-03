import React, {Component} from 'react'

class Image extends Component {
  render() {
    const {image: {imageUrl, width, height}, title} = this.props;
    return <img src={imageUrl} style={{width, height}} alt={title}/>
  }
}

export default Image;