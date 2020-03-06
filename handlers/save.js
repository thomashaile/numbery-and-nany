function save() {
    debugger;
    const data = document.getElementById('txt').value;

    //if user input is empty
    if (data === "" || data === null || data.length === 0) {
        alert("plz enter value");
    }
    //if value exists
    else if ((entries.nany.indexOf(data) !== -1) || (entries.numbery.indexOf(data) !== -1)) {
        alert("value exist in numbery or nany !");
    }
    //if the value is Nan
    else if (isNaN(data)) {

        entries.nany.push(data); //push to the array 
        const oldNanList = document.getElementById('Nany');
        const allChildren = oldNanList.children[0];
        allChildren.innerHTML = '';
        for (let item of entries.nany) {
            const newList = document.createElement('li');
            newList.innerText = item;
            allChildren.appendChild(newList);
        }
        oldNanList.appendChild(allChildren);

    }
    //the value is number
    else {
        entries.numbery.push(data); //push to the array numbers
        const oldNumberList = document.getElementById('Number');
        const allChildren = oldNumberList.children[0];
        allChildren.innerHTML = '';
        for (let item of entries.numbery) {
            const newList = document.createElement('li');
            newList.innerText = item;
            allChildren.appendChild(newList);
        }
        oldNumberList.appendChild(allChildren);
    }

    document.getElementById('txt').value = "";

    log.push({
        handler: 'save',
        entries: JSON.parse(JSON.stringify(entries))
    });
}