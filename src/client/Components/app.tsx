import React, { useState } from 'react';
import '../Less/app.less';
import { AppProps } from "../../server/domain/IApp";


export const App = ({ socket }: AppProps): React.ReactElement => {
    const ms: string[] = [];

    const [msgs, setMsgs] = useState(ms);
    const [typedMsg, setTypedMsg] = useState('')

    const sendMsg = async () => {
        socket.emit('msg', typedMsg)
    }

    socket.on('msg', (msg) => {
        setMsgs(msgs.concat(msg))
    })

    socket.on('chan', (postMsgs) => {
        setMsgs(postMsgs)
    })

    return (
        <div>
            <input onChange={e => setTypedMsg(e.target.value)} placeholder={typedMsg} />
            <button onClick={sendMsg}>{"Test Post"}</button>
            <div>
                <h2>Messages:</h2>
                {
                    msgs.map((m, i) => <p key={i}>{m}</p>)
                }
            </div>
        </div>
    );
}
