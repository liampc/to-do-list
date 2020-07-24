import "./main.css"
import {DOM} from "./DOM"
import {Events} from "./events"
import {Project} from "./project"


//get content id
const content = document.querySelector("#content")


//append all the visuals
content.append(DOM.container())


//initialize the events
window.addEventListener("load", Events.init)
window.addEventListener("load", Project.initial)
window.addEventListener("load", Project.setIndex)
