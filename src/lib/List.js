import { Item } from "./Item";
export class List {
    // instance variables
    dom = null;
    items = [];
    input = null;
    submitButton = null;

    // constructor

    /**
     * Gathers names of DOM elements and uses them to create/manage a list
     * @param {*} listName name of the list in your html
     * @param {*} inputName name of the input in your html
     * @param {*} submitButtonName name of the submit button in your html
     */
    constructor(listName, inputName, submitButtonName) {
        this.dom = document.querySelector(listName);
        this.input = document.querySelector(inputName);
        this.submitButton = document.querySelector(submitButtonName);

        // add event listeners to the submit button, when clicked, add an item

        this.submitButton.addEventListener("click", () => {
            if (this.input.value === "") return;
            this.addItem(this.input.value);
            this.input.value = "";
        });

        // add event listener to the input field, when enter is pressed, add an item
        
        this.input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                if (this.input.value === "") return;
                this.addItem(this.input.value);
                this.input.value = "";
            }
        });
    }
    // add an item to the list
    addItem(data) {
        const newItem = new Item(data);
        this.items.push(newItem);
        this.dom.append(newItem.dom);
        return newItem;
    }
    // empty the list
    clearList() {
        this.items.forEach(item => item.dom.remove());
        this.items = [];
    }
}