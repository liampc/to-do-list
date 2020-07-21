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

    let projectCard = createTags("div", "project-card")
    let projectName = createTags("span")


    //text 
    bannerName.textContent = "O-Note Again"
    projectH2.textContent = "Projects"
    addProjectBtn.textContent = "+"
    projectName.textContent = "Inbox"

    //append
    projectCard.append(projectName)
    btnDiv.append(projectH2, addProjectBtn)
    projectCont.append(projectCard)
    banner.append(bannerName)
    container.append(banner, btnDiv, projectCont)

    return container;
}


export{addCol1}