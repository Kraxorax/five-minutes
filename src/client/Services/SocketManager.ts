import { io, Socket } from "socket.io-client"
import { SocketService } from "."


export class SocketManager {

    constructor(private siteHostname: string) { }

    socketServices: { [name: string]: SocketService } = {}

    getService = (name: string): SocketService => {
        if (this.socketServices && this.socketServices[name]) return this.socketServices[name]
        else return this.makeService(name)
    }

    initSocket = (name: string): Socket => {
        const socket = io(`ws://${this.siteHostname}/${name}`)

        socket.on('connect_error', (err) => {
            console.log('Socket.io connection error:', err.message)
        })

        return socket
    }

    getAllServices = (): SocketService[] => {
        return Object.values(this.socketServices)
    }

    makeService = (name: string): SocketService => {
        const socket = this.initSocket(name)

        const service = new SocketService(socket)

        this.socketServices[name] = service

        console.log(`Created socket service ${name}`)

        return service
    }
}