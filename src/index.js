import "./main.css"
import {addCol1, addCol2} from "./DOM"
import {createTags} from "./functions"
import * as _project from "./project"



const content = document.querySelector("#content")


// Add main divs
let mainContainer = createTags("div", "main-container")
content.append(mainContainer)
mainContainer.append(addCol1())
mainContainer.append(addCol2())


// Events 
const addProjectCard = document.querySelector(".add-project")
addProjectCard.addEventListener("click", _project.addNewProject)
addProjectCard.addEventListener("click", _project.setIndex)


let projectCont = document.querySelector(".project-cont")
projectCont.addEventListener("click", _project.showProjectPage)
projectCont.addEventListener("click", _project.changeName )