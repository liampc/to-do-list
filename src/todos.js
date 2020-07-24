import {Project} from './project';


function NewNote(note, dueDate, priority){
        this.note = note,
        this.dueDate = dueDate,
        this.priority = priority
}


let Todo = (() => {

    //variables
    let todoList;
    let completedList;
    

    const getLists = () => {
        let projects = document.querySelectorAll(".project-card")
        let index;
        projects.forEach(project => {
            if (project.classList.contains("selected")){
                index = project.getAttribute("data-index")
                
            }
        })
        
        if (index !== undefined){
            let projlist = Project.projectList[index].getTodos()
            let complist = Project.projectList[index].getCompletedList()
            todoList = projlist
            completedList = complist
        }
        
    }

    
    const addNewTodo = () => {
        let note = document.querySelector(".input-note").value
        let dueDate = document.querySelector(".due-date").value
        let select = document.querySelector("#priority")
        let priority = select.options[select.selectedIndex].value
        
        let newTodo = new NewNote(note,dueDate, priority)
        getLists()
        todoList.push(newTodo)
    }

    const render = () => {
        let projlist = document.querySelector(".todo-list")
        let complist = document.querySelector(".completed")

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

        let done = completedList.map(task => {
            return `
            <div class="completed-card">
            <span> ${task.note}</span>
            <span> ${task.dueDate}</span>
            </div>
            `
        })

        complist.innerHTML = done
        projlist.innerHTML = todos;
    }

    const setIndex = () => {
        let cards = document.querySelectorAll(".todo-card");

        for (let i = 0; i < todoList.length; i++){
            cards[i].setAttribute("data-index", i)
            
        }
    }

    const checkBox = () => {
        let checkboxes = document.querySelectorAll(".checkbox")

        checkboxes.forEach(box => {
            box.addEventListener("click", (e) => {
                if (e.target.checked == true){
                    let card = e.target.parentNode
                    card.classList.add("checked")
                    let index = card.getAttribute("data-index")
                    let todo = todoList.splice(index, 1)
                    completedList.push(todo[0])
                    render()
                }
            })
        })
    }

   



    //init

    getLists();


    return {
        addNewTodo, render, getLists, checkBox, setIndex
    }

})()


export{Todo}

