import "./main.css"
import {DOM} from "./DOM"
import {Events} from "./events"


//get content id
const content = document.querySelector("#content")


//append all the visuals
content.append(DOM.container())


//initialize the events
window.addEventListener("load", Events.init)

