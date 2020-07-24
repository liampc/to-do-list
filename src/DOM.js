import "./main.css"
import {createTags} from "./functions"
import {Todo} from "./todos"


const DOM = (() => {
    //global

    let mainContainer = createTags("div", "main-container")

    //functions 
    const addCol1 = () => {

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



    const  addCol2 = () => {
        let col2 = createTags("div", "col2")

        let pHeader = createTags("div", "project-header")
        let forms = createTags("div", "form-field")
        let todoList = createTags("div", "todo-list")
        let completedList = createTags("div", "completed")
        let todoBtnDiv = createTags("div", "todo-btn-div")
        


        let pName = createTags("h2")
        //let completed = createTags("h2")
        let addTodo = createTags("button", "add-btn")
        addTodo.classList.add("add-todo")

        //text 
        pName.innerHTML = "Project Name"
        //completed.innerHTML = "Completed"
        addTodo.innerHTML = "+"

        

        //display
        forms.style.visibility = "hidden"
        

        //append
        todoBtnDiv.append(addTodo)
        //completedList.append(completed)
        pHeader.append(pName)
        col2.append(pHeader, forms, todoList, completedList, todoBtnDiv)

        return col2;
    }



    const showForms = () => {
        let forms = document.querySelector(".form-field")

        if (forms.style.visibility === "hidden") {
            addForms()
            forms.style.visibility = "visible";
            
        } else {
            forms.style.visibility = "hidden";
            Todo.addNewTodo()
            Todo.render()
            Todo.setIndex()
        }
    }



    const addForms = () => {
        let forms = document.querySelector(".form-field")

        forms.innerHTML = 
            `
            <label for="noteForm"></label>
                        <input type="text"  name="input-note" class="input-note" placeholder="Note">
                        <label for="dueDate">Due Date </label>
                        <input type="date"  name="due-date" class="due-date">
                        <label for="priority"> Priority </label>
                        <select name="priority" id="priority">
                            <option value="low"> Low </option>
                            <option value="medium"> Medium </option>
                            <option value="high"> High </option>
                        </select>
                    
            `
        
    }


//init
    const container = () => {
        mainContainer.append(addCol1())
        mainContainer.append(addCol2())
        return mainContainer
    }



    return {
        container, showForms
    }


}
)();


export{DOM}