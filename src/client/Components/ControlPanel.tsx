import React, { useState } from "react"
import { SocketManager } from "../Services"
import { NewChannelModal } from "./NewChannelModal"

interface ControlPanelProps {
    socketManager: SocketManager
}

export const ControlPanel = ({ socketManager }: ControlPanelProps): React.ReactElement => {
    const [isNewChannelModalOpen, setIsNewChannelModalOpen] = useState(false)

    const makeNewChannel = (name: string) => {
        console.log('make new channel ' + name)
        socketManager.makeService(name)
    }

    return (
        <div className='control_panel'>
            <button onClick={() => setIsNewChannelModalOpen(true)}>{'Make new Channel'}</button>
            {isNewChannelModalOpen
                ? <NewChannelModal
                    closeModal={() => setIsNewChannelModalOpen(false)}
                    makeChannel={makeNewChannel} />
                : ''
            }
        </div >
    )
}