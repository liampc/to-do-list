import {Project} from './project';


function NewNote(note, dueDate, priority){
        this.note = note,
        this.dueDate = dueDate,
        this.priority = priority
}


let Todo = (() => {

    //variables
    let todoList;
    

    const getProjectList = () => {
        let projects = document.querySelectorAll(".project-card")
        let index;
        projects.forEach(project => {
            if (project.classList.contains("selected")){
                index = project.getAttribute("data-index")
                
            }
        })
        
        if (index !== undefined){
            let list = Project.projectList[index].getTodos()
            todoList = list
        }
        
    }

    
    const addNewTodo = () => {
        let note = document.querySelector(".input-note").value
        let dueDate = document.querySelector(".due-date").value
        let select = document.querySelector("#priority")
        let priority = select.options[select.selectedIndex].value
        
        let newTodo = new NewNote(note,dueDate, priority)
        getProjectList()
        todoList.push(newTodo)
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


    //init

    getProjectList();


    return {
        addNewTodo, render, getProjectList
    }

})()


export{Todo}

