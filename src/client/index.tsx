import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './Components/app';
import { SocketManager } from './Services/SocketManager'


const socketManager = new SocketManager()


ReactDOM.render(
    <App socketManager={socketManager} />,
    document.getElementById('root')
);
