import React, {Component} from 'react'

class TextBox extends Component {
  render() {
    return <div style={{
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '5px 0',
      color: '#001e5d'
    }}>{this.props.title}</div>
  }
}

export default TextBox;