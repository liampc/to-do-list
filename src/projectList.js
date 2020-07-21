import "./main.css"
import {createTags} from "./functions"



function addCol1(){

    let container = createTags("div", "col1")
    let banner = createTags("div", "banner-cont")
    let projectCont = createTags("div", "project-cont")


    let bannerName = createTags("h1")
    let btnDiv = createTags("div", "project-btn-div")
    let projectH2 = createTags("h2")
    let addProjectBtn = createTags("button", "add-btn")
    addProjectBtn.classList.add("add-project")


    //text 

    //append
    btnDiv.append(projectH2, addProjectBtn)
    projectCont.append(btnDiv)
    banner.append(bannerName)
    container.append(banner, projectCont)

    return container;
}


export{addCol1}