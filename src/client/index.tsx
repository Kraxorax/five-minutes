import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './Components/App'
import { SocketManager } from './Services/SocketManager'

// stupid hack
const HOSTNAME = window.location.hostname !== 'localhost'
    ? window.location.hostname
    : 'localhost:3000'


const socketManager = new SocketManager(HOSTNAME)


ReactDOM.render(
    <App socketManager={socketManager} />,
    document.getElementById('root')
);
