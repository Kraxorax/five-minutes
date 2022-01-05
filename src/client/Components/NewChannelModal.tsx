import React, { useState } from 'react'

interface NewChannelModalProps {
    closeModal: () => void
    makeChannel: (newChannelName: string) => void
}

export const NewChannelModal = ({ closeModal, makeChannel }: NewChannelModalProps): React.ReactElement => {
    const [newChannelName, setNewChannelName] = useState('')

    const makeNewChannel = () => {
        makeChannel(newChannelName)
        closeModal()
    }

    return (
        <div className='new_channel_modal'>
            <p>{'Name of new channel:'}</p>
            <input value={newChannelName}
                onChange={e => setNewChannelName(e.target.value)} />

            <div className='buttons'>
                <button onClick={closeModal}>{'Close'}</button>
                <button onClick={makeNewChannel}>{'Make channel'}</button>
            </div>
        </div>
    )
}