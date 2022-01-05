import { io, Socket } from "socket.io-client"
import { SocketService } from "."



export class SocketManager {

    socketServices: { [name: string]: SocketService } = {}

    getService = (name: string): SocketService => {
        if (this.socketServices && this.socketServices[name]) return this.socketServices[name]

        const socket = this.initSocket(name)

        const service = new SocketService(socket)

        this.socketServices[name] = service

        return service
    }

    initSocket = (name: string): Socket => {
        const socket = io(`ws://localhost:3000/${name}`)

        socket.on('connect_error', (err) => {
            console.log('Socket.io connection error:', err.message)
        })

        return socket
    }

    getAllServices = (): SocketService[] => {
        return Object.values(this.socketServices)
    }
}