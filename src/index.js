import "./main.css"
import {addCol1, addCol2} from "./DOM"
import {createTags} from "./functions"
import {Project} from "./project"



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