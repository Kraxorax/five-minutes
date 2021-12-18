import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './Components/app';
import io from 'socket.io-client'
import { SocketManager } from './Services/SocketManager';

const socket = io('ws://localhost:3000')
socket.on('connect_error', (err) => {
    console.log('Socket.io connection error:', err.message)
})

const socketManager = new SocketManager(socket)


ReactDOM.render(
    <App socketManager={socketManager} />,
    document.getElementById('root')
);
