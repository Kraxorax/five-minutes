import React, { useState } from "react"
import { NewChannelModal } from "./NewChannelModal"


export const ControlPanel = (): React.ReactElement => {
    const [isNewChannelModalOpen, setIsNewChannelModalOpen] = useState(false)

    const makeNewChannel = (name: string) => {
        console.log('make new channel ' + name)
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