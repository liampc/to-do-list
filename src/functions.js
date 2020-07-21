

function createTags(tag, className){

    let element = document.createElement(tag)
    if (className){
        element.classList.add(className)
    }
    
    return element
}


export{createTags}