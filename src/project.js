


const newProject = (name) => {
    name = "Project";
    let todos = []
    let completedList = [];

    const getName = () => name;
    const changeName = (newName) => {
        newName = prompt("Change project Name")
        if (newName == null || newName == "") return
        name = newName
    };
    const getTodos = () => todos
    const getCompletedList = () => completedList

    return {
        getName, changeName, getTodos, getCompletedList
    }
};


const Project = (() => {

    //global Data
    const projectList = []


    //function
    const addNewProject = () => {
        let project = newProject()
        projectList.push(project)
        renderProject()
    }



    const renderProject = () => {

        let projectCont = document.querySelector(".project-cont")

        let cards = projectList.map(card => {
            return `
            <div class="project-card">
            <span> ${card.getName()}</span>
            <button class="delete-project"> x </button>
            </div>
            `
        }).join("")

        projectCont.innerHTML = cards
    }



    const setIndex = () => {
        let cards = document.querySelectorAll(".project-card");

        for (let i = 0; i < projectList.length; i++){
            cards[i].setAttribute("data-index", i)
            
        }
        
    }



    const showProjectPage = (e) => {
        if (e.target.className == "project-card"){
            let index = e.target.getAttribute("data-index")
            let name = projectList[index].getName()
            let header = document.querySelector(".project-header h2")

            header.innerHTML = name;
        }
    }
        


    const changeName = (e) => {
        if (e.target.tagName == "SPAN"){
            let index = e.target.parentNode.getAttribute("data-index")
            projectList[index].changeName();
            renderProject();
            setIndex();
        }
        
    }

    const selectProject = (e) => {
        if (e.target.className == "project-card"){
            let projectCards = document.querySelectorAll(".project-card")
            let project = e.target

            projectCards.forEach(card => {
                card.classList.remove("selected")
            })
            project.classList.add("selected")
        }
        
    }

    const deleteProject = (e) => {
        if (e.target.className == "delete-project"){
            let card = e.target.parentNode
            let index = card.getAttribute("data-index")
            projectList.splice(index,1)
            renderProject()
            setIndex()
        }
    }

    const initial = () =>  {
        let initial = newProject()
        projectList.push(initial)
        renderProject()
        let project = document.querySelector(".project-card")
        project.classList.add("selected")
        showProjectPage()
    }
       

    


    return {
        projectList, addNewProject, setIndex, 
        showProjectPage, changeName, selectProject, 
        deleteProject, initial

    }


})();

export{Project}
