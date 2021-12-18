import { Socket } from 'socket.io-client';
import { PostMessage, AllChannelMesages, ExpireMessage } from "../../server/models/messageTypes"
import { BaseMessage } from '../../server/models/message'

export class SocketManager {

    constructor(private socket: Socket) {

        socket.on(PostMessage, (msg: BaseMessage) => {
            this.onPostMessage(msg)
        })

        socket.on(AllChannelMesages, (msgs: BaseMessage[]) => {
            this.onAllChannelMessages(msgs)
        })

        socket.on(ExpireMessage, (msgId: string) => {
            this.onExpireMessage(msgId)
        })
    }

    postMessage = (msg: BaseMessage): void => {
        this.socket.emit(PostMessage, msg)
    }

    onPostMessage = (_msg: BaseMessage): void => console.log('Not set: onPostMessage')
    onAllChannelMessages = (_msgs: BaseMessage[]): void => console.log('Not set: onAllChannelMessages')
    onExpireMessage = (_msgId: string): void => console.log('Not set: onExpireMessage')

    setOnPostMessage = (opm: (msg: BaseMessage) => void): void => {
        this.onPostMessage = opm;
    }

    setOnAllChannelMessages = (oacm: (msgs: BaseMessage[]) => void): void => {
        this.onAllChannelMessages = oacm;
    }

    setOnExpireMessage = (oem: (msgId: string) => void): void => {
        this.onExpireMessage = oem;
    }

}