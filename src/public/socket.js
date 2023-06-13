const socket = io();

const saveNote = (title, description) => { 
    
    socket.emit('client:newNote',{
        title,
        description
    });
    //notesList.innerHTML = `<h1>${title}</h1>`
    console.log(title, description, ":)")
};


socket.on('server:setNote', (note) => appendNote(note))