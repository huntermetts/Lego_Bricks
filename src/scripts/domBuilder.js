const domBuilder = {
    appendInputForm (){
        let inputForm =
       `<article>
            <fieldset>
                <label for="lego__creator">Creator:</label>
                <input id="lego__creator" name="lego__creator" type="text" autofocus/>
            </fieldset>
            <fieldset>
                <label for="lego__name">Name:</label>
                <input id="lego__name" name="lego__name" type="text" autofocus/>
            </fieldset>
            <fieldset>
                <label for="lego__shape">Shape:</label>
                <input id="lego__shape" name="lego__shape" type="text" autofocus/>
            </fieldset>
            <fieldset>
                <label for="lego__color">Color:</label>
                    <select id="lego__color">
                        <option value="1">Red</option>
                        <option value="2">Green</option>
                        <option value="3">Yellow</option>
                        <option value="4">Blue</option>
                        <option value="5">Orange</option>
                        <option value="6">Black</option>
                    </select>
            </fieldset>
         <button class="btn lego__save">Save Lego Creation</button>
       </article>`

    //    This would be in a seperate file if the project was bigger, This appends it       to the DOM
        let displayContainer = document.querySelector("#display-container");
        displayContainer.innerHTML = inputForm;
    }
}
