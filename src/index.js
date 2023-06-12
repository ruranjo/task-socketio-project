import express from 'express'
import {Server as WebSocketServer } from 'socket.io'
import http from 'http'


import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const server = http.createServer(app)
const io = new WebSocketServer(server)

app.use(express.static( __dirname + '/public'))


io.on('connection',(socket) => {
    console.log("conecion establecidad:", socket.id)

    socket.emit("ping")
    socket.on("pong", () =>{
        console.log("pong")
    })
})

server.listen("3000")

console.log(__dirname)
console.log("listening port 3000")