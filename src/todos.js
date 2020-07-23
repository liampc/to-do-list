
let newNote = () => {

    let notes = {}

    const saveNote = (newNote) => {
        notes.note = newNote
    }
    const getNote =  () => notes.note

    return {
        saveNote, getNote
    }

}


function saveNotes(){

    let inputNote = document.querySelector(".input-note")

    let newTodo = newNote()

    newTodo.saveNote(inputNote.value)

    let test = newTodo.getNote()
    console.log(test)



}


export{newNote, saveNotes}

