function addItem() {
    const text = document.getElementById('newItemText').value;
    const value = document.getElementById('newItemValue').value;
    //console.log(text, value);
    let option = document.createElement('option');
    option.textContent = text + ' ' + value;
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
    document.getElementById('menu').appendChild(option);

    //console.log(document.getElementById('menu'));

    //console.log('TODO:...');
}