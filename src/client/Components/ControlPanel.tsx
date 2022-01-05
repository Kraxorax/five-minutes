import React, { useState } from "react"
import { NewChannelModal } from "./newChannelModal"


export const ControlPanel = (): React.ReactElement => {
    const [isNewChannelModalOpen, setIsNewChannelModalOpen] = useState(false)


    const makeNewChannel = () => {
        setIsNewChannelModalOpen(true)
        console.log('make new channel')
    }

    return (
        <div className='control_panel'>
            <button onClick={makeNewChannel}>{'Make new Channel'}</button>
            {isNewChannelModalOpen
                ? <NewChannelModal closeModal={() => setIsNewChannelModalOpen(false)}></NewChannelModal>
                : ''
            }
        </div >
    )
}