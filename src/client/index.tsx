import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './Components/app';
import io from 'socket.io-client'

const socket = io('ws://localhost:3000')
socket.on('connect_error', (err) => {
    console.log('Socket.io connection error:', err.message)
})

ReactDOM.render(
    <App socket={socket} />,
    document.getElementById('root')
);
