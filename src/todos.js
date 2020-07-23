
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

    const render = () => {
        let list = document.querySelector(".todo-list")

        let todos = todoList.map(todo => {
            return `
            <div class="todo-card">
            <input type="checkbox" class="checkbox">
            <span> ${todo.note}</span>
            <span> ${todo.dueDate}</span>
            <span> ${todo.priority}</span>
            <button class="delete-btn">x</button>
            </div>
            `
        })
        list.innerHTML = todos;
    }

    return {
        addNewTodo, render
    }

})()


export{Todo}

