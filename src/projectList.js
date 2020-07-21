import "./main.css"
import {createTags} from "./functions"



function addCol1(){

    let container = createTags("div", "col1")
    let banner = createTags("div", "banner-cont")
    let projectCont = createTags("div", "project-cont")

    container.append(banner, projectCont)

    return container 
}

export{addCol1}