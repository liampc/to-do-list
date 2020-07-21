import "./main.css"
import {addCol1} from "./projectList"
import {creatTags, createTags} from "./functions"

const content = document.querySelector("#content")

let mainContainer = createTags("div", "main-container")

content.append(mainContainer)
mainContainer.append(addCol1())