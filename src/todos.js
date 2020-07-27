import {Project} from './project';
import {format} from "date-fns"


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
            let projlist = Project.projectList[index].todos
            let complist = Project.projectList[index].completedList
            todoList = projlist
            completedList = complist
        }
        
    }

    
    const addNewTodo = () => {
        let note = document.querySelector(".input-note").value
        let dueDate = document.querySelector(".due-date").value
        if (dueDate){
            dueDate = format(new Date (dueDate), "MMM-dd")
        }
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
        }).join("")

        let done = completedList.map(task => {
            return `
            <div class="completed-card">
            <span> ${task.note}</span>
            <span> ${task.dueDate}</span>
            </div>
            `
        }).join("")

        complist.innerHTML = done
        projlist.innerHTML = todos;
        Project.saveToStorage()
    }

    const setIndex = () => {
        let cards = document.querySelectorAll(".todo-card");

        for (let i = 0; i < todoList.length; i++){
            cards[i].setAttribute("data-index", i)
            
        }
    }


    const checkBox = (e) => {
        if (e.target.classList == "checkbox"){
            let card = e.target.parentNode
            card.classList.add("checked")
            let index = card.getAttribute("data-index")
            let todo = todoList.splice(index,1)
            completedList.push(todo[0])
            render()
        }
    }

    const deleteCard = (e) => {
        if (e.target.className == "delete-btn"){
            let card = e.target.parentNode
            let index = card.getAttribute("data-index")
            todoList.splice(index,1)
            render()

        }
    }

    //init

    getLists();


    return {
        addNewTodo, render, getLists, checkBox, setIndex, deleteCard
    }

})()


export{Todo}

