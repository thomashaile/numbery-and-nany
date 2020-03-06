function remove() {
    debugger;
    //read value from user input to remove 
    const remove = document.getElementById("txt").value;

    if (isNaN(remove)) {
        const indexOfElement = entries.nany.indexOf(remove);
        const removed = entries.nany.splice(indexOfElement, 1);
        const nanList = document.getElementById('Nany');
        const allChildren = nanList.children[0];
        allChildren.removeChild(allChildren.childNodes[indexOfElement]);
        alert(removed + " " + "removed from the Nan list");

    }
    //for to remove from the numbers list
    else {
        const indexOfElement = entries.numbery.indexOf(remove);
        const removed = entries.numbery.splice(indexOfElement, 1);
        const numberList = document.getElementById('Number');
        const allChildren = numberList.children[0];
        allChildren.removeChild(allChildren.childNodes[indexOfElement]);
        alert(removed + " " + "removed from the Numbers list");
    }

    document.getElementById('txt').value = "";
    log.push({
        handler: 'remove',
        entries: JSON.parse(JSON.stringify(remove))
    });

}