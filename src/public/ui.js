/*

This code uses JavaScript to dynamically create and manipulate HTML elements.

Here are some things that happen:

Get the #notes element using querySelector.
This element can be any note container, such as a div or some component library.

create function noteUi() which creates dynamic HTML elements.

define function setNote which adds a note to the list of notes using the function noteUi().

define function renderNotes which rewrites the entire content of the notes list using the function noteUi()
to add each note individually and use the method map() JavaScript to iterate over the list of notes.

Finally, the function deleteNote() has not been defined in this code snippet,
but is presumed to be a function that removes a note from

*/

const notesList = document.querySelector('#notes')

const noteUi = note => {
    const div = document.createElement("div")

    div.innerHTML = `
    <div class="card card-body rounded-0 mb-2">
        <div class="d-flex justify-content-between">
            <h1 class="h3 card-title">${note.title}</h1> 
            <div>
                <button class="btn btn-danger delete" data-id="${note.id}">delete</button>
            </div>
        </div>
        <p>${note.description}</p>
    </div>`

    const btnDelete = div.querySelector(".delete")

    btnDelete.addEventListener('click', ()=>{
        deleteNote(btnDelete.dataset.id)
    })

    return div;
}


const setNote = (note) => {
    
    notesList.append(noteUi(note))
}

const renderNotes = (notes) =>{
    notesList.innerHTML = "";
    notes.map(note => (
        setNote(note)
    ))
}





