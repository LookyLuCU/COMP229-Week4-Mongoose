/*
COMP229-F2022-ASSIGNMENT1-822281549
Sheila Donnelly
Student #822281549
October 7th, 2022
*/

import debug from 'debug';
debug('comp-229');
import http from 'http';

import app from './app/app.js'; 

const PORT = normalizePort(process.env.PORT || 3000);
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
    return false;
}