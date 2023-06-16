import express from 'express' //Express is being imported which is a web application framework for Node.js
import {Server as WebSocketServer } from 'socket.io' // socket.io is being imported which is an open-source JavaScript library for WebSocket
import { v4 as uuidv4 } from 'uuid'; //uuidv4 is being imported which is a universally unique identifier (UUID) generation module for Node.js
import http from 'http' // http is being imported which is an object of http class which is a built-in class for making HTTP requests in Node.js

//The code is using the path API and the fileURLToPath function to get the current file path.
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//SERVER
const app = express()
const server = http.createServer(app)
const io = new WebSocketServer(server)
let notes = []

app.use(express.static( __dirname + '/public'))

/*
    Socket.io server in JavaScript, which processes different types of events from connected clients
    and transforms them into broadcasts to all connected clients through the server.

    socket.emit("server:renderNotes", notes)
    sends the "server:renderNotes" event with the current list of notes to all connected clients as issued by the server.

    socket.on("client:newNote", newNote =>{ ... })
    defines an anonymous function that will be called when a connected client sends a "client:newNote"
    event with a new notes object as a parameter.

    socket.on("client:delete Node", id =>{ ... }) defines an anonymous function that
    will be called when a connected client sends a "client:deleteNote" event with an id object as a parameter
*/

io.on('connection',(socket) => {
    console.log("conecion establecidad:", socket.id)
    
    socket.emit("server:renderNotes", notes)

    socket.on("client:newNote", newNote =>{
        const idv4 = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        const objNote = {...newNote, id : idv4}
        notes.push(objNote)
        io.emit("server:setNote",objNote)
    })

    socket.on("client:deleteNote", id =>{
        notes = notes.filter((note) => note.id !== id)
        io.emit("server:renderNotes", notes)
    })

})

server.listen("3000")

console.log(__dirname)
console.log("listening port 3000")