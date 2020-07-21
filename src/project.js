const list = []


const addNew = (name) => {
    name = "Project";
    
    const getName = () => name;
    const changeName = (newName) => name = newName;

    return {
        getName, changeName
    }
};




export{ addNew, list}
