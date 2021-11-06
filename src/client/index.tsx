import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Components/app';
import io from 'socket.io-client'

const socket = io('http://localhost:8050')
socket.emit('msg', '123test')


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
