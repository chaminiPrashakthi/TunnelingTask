const WebSocket = require('ws')
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use('/', router);
app.listen(8000, () => console.log(' Server Listening'));
app.use(bodyParser.json());
app.use(cors());

var portVal = null;
var text;
const wss = new WebSocket.Server({ port: 8080 })

// connection establish
wss.on('connection', function (connection) {
    console.log('Opened connection ');

    app.post('/connection', (req, res) => {
        res.send(req.body.post);
        portVal = req.body.post;
        console.log('ssh with ' + portVal);
        // Send data back to the client
        connection.send(portVal);
        // data is received from client
        connection.on('message', function (message) {
            if (message != 'Error') {
                console.log('Success')
                text = 'Success'
            } else {
                console.log('Error');
                text = 'Error';
            }

        });
        res.send(text+" connection with " +req.body.post);
        res.send();
    })

    // The connection was closed
    connection.on('close', function () {
        console.log('Closed Connection ');
    });

});
