import { io, Socket } from "socket.io-client"
import { SocketService } from "."



export class SocketManager {

    socket: Socket

    constructor() {
        this.socket = io('ws://localhost:3000')
        this.socket.on('connect_error', (err) => {
            console.log('Socket.io connection error:', err.message)
        })
    }

    getService = (): SocketService => new SocketService(this.socket)
}