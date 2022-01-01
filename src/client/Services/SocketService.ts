import { Socket } from 'socket.io-client';
import { PostMessage, AllChannelMesages, ExpireMessage, PublishMessage } from "../../server/models/messageTypes"
import { BaseMessage } from '../../server/models/message'

export class SocketService {

    constructor(private socket: Socket) {

        socket.on(PublishMessage, (msg: BaseMessage) => {
            this.onPublishedMessage(msg)
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

    onPublishedMessage = (_msg: BaseMessage): void => console.log('Not set: onPostMessage')
    onAllChannelMessages = (_msgs: BaseMessage[]): void => console.log('Not set: onAllChannelMessages')
    onExpireMessage = (_msgId: string): void => console.log('Not set: onExpireMessage')

    setOnPublishedMessage = (opm: (msg: BaseMessage) => void): void => {
        this.onPublishedMessage = opm;
    }

    setOnAllChannelMessages = (oacm: (msgs: BaseMessage[]) => void): void => {
        this.onAllChannelMessages = oacm;
    }

    setOnExpireMessage = (oem: (msgId: string) => void): void => {
        this.onExpireMessage = oem;
    }

}