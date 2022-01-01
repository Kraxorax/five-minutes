import React from 'react'
import { SocketManager } from '../Services'
import { Channel } from './channel'
import '../Less/app.less'

interface AppProps {
    socketManager: SocketManager
}

export const App = ({ socketManager }: AppProps): React.ReactElement => {
    const socketService = socketManager.getService('root')

    return (
        <Channel socketService={socketService} ></Channel>
    );
}
