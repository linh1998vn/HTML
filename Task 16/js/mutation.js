var elList, addLink, newEL, newText, counter, ListItemsl;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
    e.preventDefault();
    newEL = document.createElement('Li');
    newText = document.createTextNode('New List Item');
    newEl.appendChild()ild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItems = elList.getElementById('li').length;
    counter.innerHTML = listItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);