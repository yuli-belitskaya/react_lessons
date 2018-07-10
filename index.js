import { summa, differents, division, multiplication } from './src/arifmetica';
console.log(summa(3, 5));
console.log(division(3, 5));
console.log(differents(3, 5));
console.log(multiplication(3, 5));

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/hello';
import Summa from './src/summa';


ReactDOM.render (
    <Hello />,
    document.getElementById('root')
);

ReactDOM.render (
    <Summa />,
    document.getElementById('summa')
);