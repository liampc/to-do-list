import "./main.css"
import {DOM, Events} from "./DOM"


//get content id
const content = document.querySelector("#content")


//append all the visuals
content.append(DOM.container())


//initialize the events
window.addEventListener("load", Events.init)

