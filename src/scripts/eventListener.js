const eventListeners = {
    handleFormSubmission () {
        // Get input values from form
        // Targeting each value of the field with '.value' and const
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const shape = document.querySelector("#lego__shape").value;
        const color = document.querySelector("#lego__color").value;
        // Then console.log-ing the values declared above
        // console.log(creator);
        // console.log(name);
        // console.log(shape);
        // console.log(color);

        // Creating an object to represnt a lego:
        // This could possibly go in another module and be called here if the project was bigger
        const legoToSave = {
            creatorName: creator,
            legoName: name,
            legoColor: color,
            legoShape: shape
        }
        console.log(legoToSave);

        // Post to API and passing legoToSave (the object above) as an argument
        data.postLego(legoToSave);
    }
};