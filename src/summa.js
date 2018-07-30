import {summa} from './arifmetica';
import React, {Component} from 'react';

class Summa extends Component {
  render() {
    return (
      <div>Summa: {summa(3, 5)}</div>
    )
  }
}

export default Summa;