import "./main.css"
import {addCol1, addCol2, showForms, addForms} from "./DOM"
import {createTags} from "./functions"
import {Project} from "./project"
import { Todo } from "./todos"



const content = document.querySelector("#content")


// Add main divs
let mainContainer = createTags("div", "main-container")
content.append(mainContainer)
mainContainer.append(addCol1())
mainContainer.append(addCol2())


// Events 
const addProjectCard = document.querySelector(".add-project")
addProjectCard.addEventListener("click", Project.addNewProject)
addProjectCard.addEventListener("click", Project.setIndex)


let projectCont = document.querySelector(".project-cont")
projectCont.addEventListener("click", Project.showProjectPage)
projectCont.addEventListener("click", Project.changeName)
projectCont.addEventListener("click", Project.selectProject)
projectCont.addEventListener("click", Todo.getProjectList)
projectCont.addEventListener("click", Todo.render)

let addTodo = document.querySelector(".add-todo")
addTodo.addEventListener("click", showForms)

