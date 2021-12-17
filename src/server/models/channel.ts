import { Message } from './message'

export class Channel {
    posts: Message[] = []

    add = (text: string): number => {
        const message = new Message(text, this.remove)
        this.posts.push(message)
        return this.posts.length
    }

    remove = (msg: Message): void => {
        const index = this.posts.indexOf(msg)
        this.posts.splice(index, 1)
    }
}


