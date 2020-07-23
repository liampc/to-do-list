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
    bannerName.textContent = "O-Note Again"
    projectH2.textContent = "Projects"
    addProjectBtn.textContent = "+"
    

    //append
    btnDiv.append(projectH2, addProjectBtn)
    banner.append(bannerName)
    container.append(banner, btnDiv, projectCont)

    return container;
}

function addCol2(){
    let col2 = createTags("div", "col2")

    let pHeader = createTags("div", "project-header")
    let todoList = createTags("div", "todo-list")
    let todoBtnDiv = createTags("div", "todo-btn-div")
    let forms = createTags("div", "formField")


    let pName = createTags("h2")
    let addTodo = createTags("button", "add-btn")
    addTodo.classList.add("add-todo")

    //text 
    pName.innerHTML = "Project Name"
    addTodo.innerHTML = "+"
    

    //display
    forms.style.visibility = "hidden"
    

    //append
    todoBtnDiv.append(addTodo)
    pHeader.append(pName)
    col2.append(pHeader, forms, todoList, todoBtnDiv)

    return col2;
}

function showForms(){
    let forms = document.querySelector(".formField")

    if (forms.style.visibility === "hidden") {
        forms.style.visibility = "visible";
        
      } else {
        forms.style.visibility = "hidden";
      }
}



export{addCol1, addCol2, showForms}