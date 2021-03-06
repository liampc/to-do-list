import {DOM} from "./DOM"
import {Todo} from "./todos"
import {Project} from "./project"

const Events = (() => {

    const addProjectCard = () => {
        const addProjectCard = document.querySelector(".add-project")
        addProjectCard.addEventListener("click", Project.addNewProject)
        addProjectCard.addEventListener("click", Project.setIndex)
        addProjectCard.addEventListener("click", Project.saveToStorage )

    }

    const projectCont = () => {
        const projectCont = document.querySelector(".project-cont")
        projectCont.addEventListener("click", Project.showProjectPage)
        projectCont.addEventListener("click", Project.selectProject)
        projectCont.addEventListener("click", Todo.getLists)
        projectCont.addEventListener("click", Project.deleteProject)
        projectCont.addEventListener("click", Todo.render)
        
    }

   const addTodo = () => {
        const addTodo = document.querySelector(".add-todo")
        addTodo.addEventListener("click", DOM.showForms)
        addTodo.addEventListener("click", Todo.checkBox)
        addTodo.addEventListener("click", Project.saveToStorage )
   }

   const todoList = () => {
        const  todoList = document.querySelector(".todo-list")
        todoList.addEventListener("click", Todo.checkBox)
        todoList.addEventListener("click", Todo.deleteCard)
        todoList.addEventListener("click", Project.saveToStorage )
   }


    //init
    const init = () => {
        addProjectCard()
        projectCont()
        addTodo()
        todoList()
    }

    return {
        init
    }


})();

export{Events}