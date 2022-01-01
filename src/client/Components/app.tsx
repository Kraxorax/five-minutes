import React, { useState } from 'react'
import { BaseMessage } from '../../server/models/message'
import { SocketManager, SocketService } from '../Services'
import { Channel } from './channel'
import '../Less/app.less'

interface AppProps {
    socketManager: SocketManager
}

export const App = ({ socketManager }: AppProps): React.ReactElement => {
    const socketService = socketManager.getService()

    return (
        <Channel socketService={socketService} ></Channel>
    );
}
