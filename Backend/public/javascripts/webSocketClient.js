var WebSocket = require('ws');
const exec = require('child_process').exec;
const io = require("socket.io-client"),
    ioClient = io.connect("ws://15.206.88.74:8080");
var message = null;

//web socket connection
ioClient.on = () => {
    console.log('Connected');
}
// ioClient.on("seq-num", (msg) => console.info(msg));


// const connection = new WebSocket('ws://15.206.88.74:8080');

// connection.onopen = () => {
//     console.log('connected');
// }

// connection.onclose = () => {
//     console.error('disconnected');
// }

// connection.onmessage = e => {
//     console.log(e.data + 'Port No');
//     portForwarding(e.data);
// }

// connection.onerror = (error) => {
//     console.error('failed to connect', error);
// }

//ssh tunneling

// portForwarding = function (portVal) {
//     var
//         config = {
//             host: '15.206.88.74',
//             username: 'demo',
//             password: '1234'
//         },
//         portForwardingCmd = 'ssh -R ' + portVal + ':localhost:22 demo@' + config.host;
//     console.log(portForwardingCmd)

//     exec(portForwardingCmd, (error, stdout, stderr) => {

//         if (error) {
//             message = 'Error';
//             console.log(message)
//             connection.send(message);
//             throw error;
//         }
//     });
//     connection.send(message);

// }