import React, { useState } from 'react';
import { BaseMessage } from '../../server/models/message'
import { SocketService } from '../Services/SocketService'
import { Message } from './message'

interface ChannelProps {
    socketService: SocketService
}

export const Channel = ({ socketService }: ChannelProps): React.ReactElement => {
    const ms: BaseMessage[] = [];

    const [msgs, setMsgs] = useState(ms);
    const [typedMsg, setTypedMsg] = useState('')

    const sendMsg = () => {
        const message = new BaseMessage(typedMsg)
        socketService.postMessage(message)
        setTypedMsg('')
    }

    const expireMessage = (msgId: string) => {
        const restMsgs = msgs.filter(m => m.id !== msgId)
        setMsgs(restMsgs)
    }

    socketService.setOnPublishedMessage((msg: BaseMessage) => setMsgs(msgs.concat(msg)))

    socketService.setOnAllChannelMessages((msgs: BaseMessage[]) => setMsgs(msgs))

    socketService.setOnExpireMessage(expireMessage)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.nativeEvent.code === "Enter") {
            sendMsg()
        }
    };

    return (
        <div className='channel'>
            <div className='msg_pane'>
                {
                    msgs.map(m => <Message key={m.id} msg={m} />)
                }
            </div>
            <div className='msg_input'>
                <input value={typedMsg}
                    onChange={e => setTypedMsg(e.target.value)}
                    onKeyDown={keyDownHandler} />
                <button onClick={sendMsg}>{"Test Post"}</button>
            </div>
        </div>
    );
}
