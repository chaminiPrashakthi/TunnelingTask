const WebSocket = require('ws')
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


var portVal = null;
var text;
const wss = new WebSocket.Server({ port: 8080 })


router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://15.206.88.74:3000');
    res.send('8907');
});

// connection establish
wss.on('connection', function (connection) {
    console.log('Opened connection ');


    //     app.post('/connection', function (req, res) {
    //         portVal = req.body.portVal;
    //         console.log('ssh with ' + portVal);
    //         // Send data back to the client
    //         connection.send(portVal);
    //         // data is received from client
    //         connection.on('message', function (message) {
    //             if (message != 'Error') {
    //                 console.log('Success')
    //                 text = 'Success'
    //             } else {
    //                 console.log('Error');
    //                 text = 'Error';
    //             }
    //             res.write("Connection " + text + " with port value " + portVal);
    //             res.end()
    //         });

    //     })

    //     // The connection was closed
    //     connection.on('close', function () {
    //         console.log('Closed Connection ');
    //     });

});
module.exports = router;
