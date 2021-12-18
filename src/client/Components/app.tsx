import React, { useState } from 'react';
import { BaseMessage } from '../../server/models/message'
import { SocketManager } from '../Services/SocketManager'
import '../Less/app.less';

interface AppProps {
    socketManager: SocketManager
}

export const App = ({ socketManager }: AppProps): React.ReactElement => {
    const ms: BaseMessage[] = [];

    const [msgs, setMsgs] = useState(ms);
    const [typedMsg, setTypedMsg] = useState('')

    const sendMsg = () => {
        const message = new BaseMessage(typedMsg)
        socketManager.postMessage(message)
        setTypedMsg('')
    }

    const expireMessage = (msgId: string) => {
        const restMsgs = msgs.filter(m => m.id !== msgId)
        setMsgs(restMsgs)
    }

    socketManager.setOnPostMessage((msg: BaseMessage) => setMsgs(msgs.concat(msg)))

    socketManager.setOnAllChannelMessages((msgs: BaseMessage[]) => setMsgs(msgs))

    socketManager.setOnExpireMessage(expireMessage)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.nativeEvent.code === "Enter") {
            sendMsg()
        }
    };

    return (
        <div>
            <input value={typedMsg}
                onChange={e => setTypedMsg(e.target.value)}
                onKeyDown={keyDownHandler} />
            <button onClick={sendMsg}>{"Test Post"}</button>
            <div>
                <h2>Messages:</h2>
                {
                    msgs.map(m => <p key={m.id}>{m.text}</p>)
                }
            </div>
        </div>
    );
}
