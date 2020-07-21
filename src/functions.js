

function createTags(tag, className){

    let element = document.createElement(tag)
    element.classList.add(className || "")

    return element
}


export{createTags}