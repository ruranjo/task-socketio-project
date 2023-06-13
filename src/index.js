import express from 'express'
import {Server as WebSocketServer } from 'socket.io'
import { v4 as uuidv4 } from 'uuid';
import http from 'http'


import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const server = http.createServer(app)
const io = new WebSocketServer(server)
const notes = []

app.use(express.static( __dirname + '/public'))


io.on('connection',(socket) => {
    console.log("conecion establecidad:", socket.id)
    
    //socket.emit("client:loadNoted")

    socket.on("client:newNote", newNote =>{
        const idv4 = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        const objNote = {...newNote, id : idv4}
        notes.push(objNote)
        socket.emit("server:setNote",objNote)
    })
})

server.listen("3000")

console.log(__dirname)
console.log("listening port 3000")