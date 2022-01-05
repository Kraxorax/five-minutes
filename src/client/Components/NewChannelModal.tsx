import React from 'react'

interface NewChannelModalProps {
    closeModal: () => void

}

export const NewChannelModal = ({ closeModal }: NewChannelModalProps): React.ReactElement => {

    return (
        <div className='new_channel_modal'>
            {'This is new channel modal'}
            <button onClick={closeModal}>{'Close'}</button>
        </div>
    )
}