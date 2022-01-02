import React from 'react';
import { BaseMessage } from '../../server/models/message'

interface MessageProps {
    msg: BaseMessage
}

export const Message = ({ msg }: MessageProps): React.ReactElement => {
    return <div className='msg'>{msg.text}</div>
}