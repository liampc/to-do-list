let projectList = []


const newProject = (name) => {
    name = "Project";
    
    const getName = () => name;
    const changeName = (newName) => {
        newName = prompt("Change project Name")
        name = newName
    };

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
}

function setIndex(){
    let cards = document.querySelectorAll(".project-card");

    for (let i = 0; i < projectList.length; i++){
        cards[i].setAttribute("data-index", i)
        
     }
    
}

function showProjectPage(e){
    if (e.target.className == "project-card"){
        let index = e.target.getAttribute("data-index")
        console.log(index)
    }
}
    


function changeName(e){
    if (e.target.tagName == "SPAN"){
        let index = e.target.parentNode.getAttribute("data-index")
        projectList[index].changeName();
        renderProject();
        setIndex();
    }
    
}


export{projectList, newProject, addNewProject, renderProject, setIndex, showProjectPage, changeName}
