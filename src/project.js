
const newProject = (name) => {
    name = name
    let todos = []
    let completedList = [];
    return {
        name, todos, completedList
    }
};


const Project = (() => {

    //global Data
    let projectList = []


    //function
    const addNewProject = () => {
        let name = document.querySelector(".project-name")
        if (name.value == "") return
        let project = newProject(name.value)
        projectList.push(project)
        renderProject()
        name.value = "";
    }



    const renderProject = () => {

        let projectCont = document.querySelector(".project-cont")

        let cards = projectList.map(card => {
            return `
            <div class="project-card">
            <span> ${card.name}</span>
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
            let name = projectList[index].name
            let header = document.querySelector(".project-header h2")

            header.innerHTML = name;
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

       
    const saveToStorage = () => {
       let projectStrings = JSON.stringify(projectList)
        localStorage.setItem("savedProjects", projectStrings)
    }

    const loadStorage = () => {
        let getProjects = JSON.parse(localStorage.getItem("savedProjects"))
        if (getProjects !== null){
            getProjects.forEach(project => [
                projectList.push(project)
            ])
        }
        renderProject()
        setIndex()
        console.log(projectList)
    }


    return {
        projectList, addNewProject, setIndex, 
        showProjectPage, selectProject, 
        deleteProject, saveToStorage, loadStorage

    }


})();

export{Project}
