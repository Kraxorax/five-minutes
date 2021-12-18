import { v4 as uuid } from "uuid"

const lifetime = 10 * 1000 // 5 * 60 * 1000

export class BaseMessage {
    public id: string = uuid()

    constructor(public text: string) { }
}

export class Expirable<T> {
    constructor(public data: T, remove: (m: Expirable<T>) => void) {
        setTimeout(() => {
            remove(this)
        }, lifetime)
    }
}
