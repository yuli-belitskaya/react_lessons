import React, {Component} from 'react';
import Lin from "../components/link";

const menuStyle = {
  background: 'rgb(84, 137, 177)',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  fontWeight: '700',
  fontSize: '20px',
};

const linkStyle = {
  textAlign: 'center',
  padding: '5px',
  color: '#fff',
  display: 'inline-block',
};

class Menu extends Component {
  render() {
    let menus = [
      "Catalog",
      "Cart",
      "Contacts",
    ];

    return (
      <div style={menuStyle}>
        {menus.map((value, index) => {
          return <div style={linkStyle} key={index}><Lin label={value} /></div>
        })}
        {this.props.children}
      </div>
    )
  }
}

export default Menu;