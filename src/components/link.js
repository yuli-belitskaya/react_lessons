import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  textAlign: 'center',
  padding: '0 5px',
  color: '#fff',
  display: 'inline-block',
  textDecoration: 'none',
};

class Lin extends Component {

  render() {
    return <Link style={linkStyle} to={'/' + this.props.label.toLowerCase().trim().replace(" ","-")}>{this.props.label}</Link>;
  }
}

export default Lin;