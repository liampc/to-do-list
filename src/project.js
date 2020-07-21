let projectList = []


const newProject = (name) => {
    name = "Project";
    
    const getName = () => name;
    const changeName = (newName) => name = newName;

    return {
        getName, changeName
    }
};


function addNewProject(){
    let project = newProject()
    projectList.push(project)
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


export{projectList, newProject, addNewProject, renderProject}
