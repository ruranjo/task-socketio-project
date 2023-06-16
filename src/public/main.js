
/*
   This is a JavaScript code snippet that handles the submit event of a HTML form with the id noteForm.
   When the form is submitted, an event listener is attached to its submit event.
   The preventDefault()
   method is called on the event object, which prevents the form from submitting to the server and refreshing the page.
   Then, a saveNote function is called with the values of the inputs with the id  title and 
   description.
*/

 const noteForm = document.querySelector('#noteForm')
 const title = document.querySelector('#title')
 const description = document.querySelector('#description')
 

 noteForm.addEventListener('submit', e => {
    e.preventDefault()
    saveNote(title.value, description.value)
 })
