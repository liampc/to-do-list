const list = []


const addNew = (dateCreated) => {
    let name = "Project";
    const getName = () => name;
    const getDateCreated = () => dateCreated
    const changeName = (newName) => name = newName;

    return {
        getName, getDateCreated, changeName
    }
};




export{ addNew, list}
