function reset() {
    debugger;
    const numberlist = document.getElementById('Number');
    numberlist.children[0].innerHTML = '';
    const nanList = document.getElementById('Nany');
    nanList.children[0].innerHTML = '';
    document.getElementById('txt').value = "";
    entries.numbery = [];
    entries.nany = [];

    log.push({
        handler: 'reset',
        entries: JSON.parse(JSON.stringify(entries))
    });

}