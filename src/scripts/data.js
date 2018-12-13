
const data = {
    // Function below takes an object from eventListener.js and makes a "POST" to the database
    postLego(legoToSaveArg){
        fetch("http://localhost:8088/legos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    // Where the argument is called and the object is passed that has been declared in eventListener.js 
    body: JSON.stringify(legoToSaveArg)
        })
    }
}

// Example of how to delete

//     deleteLego(legoId){
//         fetch(`http://localhost:8088/legos/${legoId}`, {
//     method: "DELETE",
//     headers: {
//         "Content-Type": "application/json"
//     },
//         })
//     }
// }

// data.deleteLego(3)
