import { Item } from "./Item";
export class List {
    dom = null;
    items = [];
    input = null;
    submitButton = null;
    constructor(listName, inputName, submitButtonName) {
        this.dom = document.querySelector(listName);
        this.input = document.querySelector(inputName);
        this.submitButton = document.querySelector(submitButtonName);
        this.submitButton.addEventListener("click", () => {
            if (this.input.value === "") return;
            this.addItem(this.input.value);
            this.input.value = "";
        });
    }
    addItem(data) {
        const newItem = new Item(data);
        this.items.push(newItem);
        this.dom.append(newItem.dom);
        return newItem;
    }
    clearList() {
        this.items.forEach(item => item.dom.remove());
        this.items = [];
    }
}