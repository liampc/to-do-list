
let newNote = () => {

    let notes = {}

    const saveNote = (newNote) => {
        notes["note"] = newNote
    }
    const getNote =  () => notes["note"]

    const saveDueDate = (dueDate) => {
        notes["dueDate"] = dueDate
    }

    const getDueDate = () => notes["dueDate"]

    return {
        saveNote, getNote, saveDueDate, getDueDate
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

    const saveDueDate = () => {
        let dueDate = document.querySelector(".due-date")

        newTodo.saveDueDate(dueDate.value)
        let date = newTodo.getDueDate()
        console.log(date)

    }

    const savePriority = () => {
        let priority = document.querySelector("#priority")
        let selected = priority.options[priority.selectedIndex].value
        console.log(selected)
    }
    
    const saveTodo = () => {
        saveNote()
        saveDueDate()
        savePriority()
    }

    return {
        saveTodo
    }

})()


export{Todo}

