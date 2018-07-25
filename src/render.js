import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './../index';

const result = ReactDOMServer.renderToString(<App />);

export default result;

module.exports = {
    default: result
};