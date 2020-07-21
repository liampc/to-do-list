import "./main.css"
import {addCol1, addNewProject} from "./projectList"
import {createTags} from "./functions"



const content = document.querySelector("#content")


// Add main divs
let mainContainer = createTags("div", "main-container")
content.append(mainContainer)
mainContainer.append(addCol1())


// Events 
const addProjectCard = document.querySelector(".add-project")
addProjectCard.addEventListener("click", addNewProject)