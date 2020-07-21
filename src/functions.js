

function createTags(tag, className){

    let element = document.createElement(tag)
    if (className){
        element.classList.add(className)
    }
    return element
}


function addText(tag, text){
    
    let element = document.querySelector(tag)
    element.innerHTML = text;
}

export{createTags}