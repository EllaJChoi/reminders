const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        //Create the item div
        this.createItem(itemName);
    }
    createItem(itemName) {
        var input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var editButton = document.createElement('button');
        editButton.innerHTML = `<i class="fas fa-edit"></i>`;
        editButton.classList.add('editButton');
        editButton.addEventListener('click', () => this.edit(input));

        var removeButton = document.createElement('button');
        removeButton.innerHTML = `<i class="far fa-trash-alt"></i>`;
        removeButton.classList.add('removeButton');
        removeButton.addEventListener('click', () => this.remove(itemBox));

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        container.removeChild(item);
    }

}

function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13) {
        check();
    }
})