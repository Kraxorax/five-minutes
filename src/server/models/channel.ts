import { Namespace } from 'socket.io'
import { Expirable, BaseMessage } from './message'
import { PostMessage, AllChannelMesages, ExpireMessage, PublishMessage } from './messageTypes'

export class Channel {
    posts: Expirable<BaseMessage>[] = []

    constructor(private ns: Namespace) {
        this.ns.on('connection', (socket) => {
            console.log(`a user connected : ${socket.id}`)

            socket.on('disconnect', () => {
                console.log('user disconected')
            })

            socket.join('main')
            this.ns.to('main').emit(ExpireMessage, new BaseMessage('Welcome'))

            this.ns.to(socket.id).emit(AllChannelMesages, this.posts.map(p => p.data))

            socket.on(PostMessage, (msg) => {
                console.log("Server received:", msg)
                this.add(msg)
                this.ns.emit(PublishMessage, msg)
            })
        })
    }

    add = (msg: BaseMessage): void => {
        const message = new Expirable<BaseMessage>(msg, this.remove)
        this.posts.push(message)
    }

    remove = (msg: Expirable<BaseMessage>): void => {
        const index = this.posts.indexOf(msg)
        this.posts.splice(index, 1)
        this.ns.emit(ExpireMessage, msg.data.id)
        console.log('Server - Sent expire', msg.data.id)
    }
}


