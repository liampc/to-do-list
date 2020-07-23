
let newNote = () => {

    let notes = {}

    const saveNote = (newNote) => {
        notes["note"] = newNote
    }
    const getNote =  () => notes["note"]

    return {
        saveNote, getNote
    }

}


let Todo = (() => {

    //variables
    let newTodo = newNote()
    

    const saveNote = () => {
        let inputNote = document.querySelector(".input-note")
        newTodo.saveNote(inputNote.value)
        let note = newTodo.getNote()
        console.log(note)
    }

    
    

    return {
        saveNote
    }

})()


export{Todo}

