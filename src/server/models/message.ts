const lifetime = 5 * 60 * 1000

export class Message {
    constructor(public text: string, remove: (m: Message) => void) {
        setTimeout(() => {
            remove(this)
        }, lifetime)
    }
}