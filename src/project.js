


const newProject = (name) => {
    name = "Project";
    let todos = []

    const getName = () => name;
    const changeName = (newName) => {
        newName = prompt("Change project Name")
        name = newName
    };
    const getTodos = () => todos

    return {
        getName, changeName, getTodos
    }
};


const Project = (() => {

    //global Data
    const projectList = []

    //DOM
    


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
            let list = projectList[index].getTodos()
            console.log(list)
            
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
        let projectCards = document.querySelectorAll(".project-card")
        let project = e.target

        projectCards.forEach(card => {
            card.classList.remove("selected")
        })
        project.classList.add("selected")
        console.log(projectCards)

    }

    return {
        projectList, addNewProject, setIndex, showProjectPage, changeName, selectProject
    }


})();

export{Project}
