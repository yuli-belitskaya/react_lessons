require('babel-register');
const express = require('express');

const result = require('./render').default;

const app = express();

app.get('/', (req, res) => {
    res.send(`<html>
                <head>
                    <title>bububu</title>
                </head>
                <body>
                    <div id="root">${result}</div>
                </body>
            </html>`);
});

app.listen(3005,
    () => console.log('Server is listening on 3005')
);