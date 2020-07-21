import "./main.css"
import {createTags} from "./functions"
import {addNew as Project, list as projectList} from "./project"



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
    bannerName.textContent = "O-Note Again"
    projectH2.textContent = "Projects"
    addProjectBtn.textContent = "+"
    

    //append
    btnDiv.append(projectH2, addProjectBtn)
    banner.append(bannerName)
    container.append(banner, btnDiv, projectCont)

    return container;
}

function addNewProject(){
    let newProject = Project()
    projectList.push(newProject)
    renderProject()

}

function renderProject(){

     let projectCont = document.querySelector(".project-cont")
 
     let cards = projectList.map(card => {
         return `
         <div class="project-card">
         <span> ${card.getName()}</span>
        </div>
         `
     }).join("")

     projectCont.innerHTML = cards
     console.log(projectList)
}





export{addCol1, addNewProject, renderProject}