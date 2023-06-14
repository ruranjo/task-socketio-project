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