const WebSocket = require('ws')
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use('/', router);
app.listen(process.env.port || 8000);
app.use(bodyParser.urlencoded({ extended: false }));


var portVal = null;
var text;
const wss = new WebSocket.Server({ port: 8080 })

app.post('/connection', (req, res) => {
    console.log(req.body);
    res.send(
        `Port Number: ${req.body.post}`,
    );
})

// connection establish
// wss.on('connection', function (connection) {
//     console.log('Opened connection ');



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

// });