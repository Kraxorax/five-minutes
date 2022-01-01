import { Server } from 'socket.io'
import { Channel } from './channel'

export class Plumber {

    private static instance: Plumber

    public rootChan: Channel

    private constructor(private io: Server) {
        const rootNamespace = this.io.of('/root')
        this.rootChan = new Channel(rootNamespace)
    }

    static getInstance = (io: Server): Plumber => {
        if (!this.instance) {
            this.instance = new Plumber(io)
        }
        return this.instance
    }

}