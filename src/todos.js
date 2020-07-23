
function NewNote(note, dueDate, priority){
        this.note = note,
        this.dueDate = dueDate,
        this.priority = priority
}


let Todo = (() => {

    //variables
    let todoList = [];
    
    const addNewTodo = () => {
        let note = document.querySelector(".input-note").value
        let dueDate = document.querySelector(".due-date").value
        let select = document.querySelector("#priority")
        let priority = select.options[select.selectedIndex].value
        
        let newTodo = new NewNote(note,dueDate, priority)
        todoList.push(newTodo)
        console.log(todoList)

    }

    return {
        addNewTodo
    }

})()


export{Todo}

