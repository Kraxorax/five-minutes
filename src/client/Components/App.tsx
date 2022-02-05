import React from 'react'
import { SocketManager } from '../Services'
import { Channel } from './Channel'
import { ControlPanel } from './ControlPanel'
import '../Less/app.less'

interface AppProps {
    socketManager: SocketManager
}

export const App = ({ socketManager }: AppProps): React.ReactElement => {
    const _socketService = socketManager.getService('channels')
    const services = socketManager.getAllServices()

    return (
        <div id='main'>
            <ControlPanel socketManager={socketManager} />
            <div className='channels'>
                {services.map(ss =>
                    <Channel key={ss.id} socketService={ss} ></Channel>
                )}
            </div>
        </div>
    );
}
