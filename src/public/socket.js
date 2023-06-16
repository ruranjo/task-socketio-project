/*
This JS snippet is a part of an application where a client sends a request to the server to 
create a new note via an event.

socket.emit('client:newNote'), while emitting a response with the title and description of the note.
Similarly, the client will emit an event

socket.emit('client:deleteNote') to the server to delete a particular note by passing its ID.


On the server side, the events 'server:renderNotes'
and 'server:setNote' they are processed by the server backend to update the list of notes or the current status of a
specific note, respectively. The function renderNotes() and
setNote() are functions that process events sent from the client to update the list of notes and the
status of a particular note on the server, respectively.


It should be noted that the events 'client:newNote' , 'client:deleteNote' , 'server:renderNotes' and 'server:setNote'
are events defined by the WebSocket API that are used to communicate between the server and the clients.

In summary, the application is in charge of receiving requests from the client to create or delete notes
and processing them on the server through the WebSocket API (Socket.io in this case),
allowing the construction of web applications in real time.
*/

const socket = io();

const saveNote = (title, description) => { 
    
    socket.emit('client:newNote',{
        title,
        description
    });
    //notesList.innerHTML = `<h1>${title}</h1>`
    console.log(title, description, ":)")
};

const deleteNote = (id) =>{
    socket.emit("client:deleteNote",id)
}

socket.on('server:renderNotes', (notes) => renderNotes(notes))

socket.on('server:setNote', (note) => setNote(note))