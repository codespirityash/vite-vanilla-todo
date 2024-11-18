import { generateId, makeDOM } from "./utils";

export class Item {

    //declare instance variables
    id = generateId();
    dom = null;
    complete = false;
    data = "";

    // constructor
    /**
     * Creates a dom element to represent the item. It also adds event listeners to the remove and complete buttons
     * @param {*} data title
     */
    constructor(data) {
        this.data = data;
        this.createDOM();
    }

    // Create DOM elements to represent the item
    createDOM() {

        // create elements
        const item = makeDOM("section");

        const header = makeDOM("div");
        const title = makeDOM("h3");

        const footer = makeDOM("div");
        const removeButton = makeDOM("button");
        const completeButton = makeDOM("button");

        // add classes to created elements
        item.classList.add("item");
        header.classList.add("header");
        footer.classList.add("footer");
        removeButton.classList.add("remove");
        completeButton.classList.add("complete");

        // add content to created elements
        title.textContent = this.data;
        removeButton.textContent = "Remove";
        completeButton.textContent = "Complete";

        // add event listeners to created button elements
        removeButton.addEventListener("click", () => {
            this.dom.remove();
        });
        completeButton.addEventListener("click", () => {
            this.toggleComplete();
        });

        // append elements to their respective parents
        item.append(header);
        header.append(title);
        item.append(footer);
        footer.append(removeButton);
        footer.append(completeButton);

        // store item in dom variable for persistance use
        this.dom = item;
    }
    // a function to toggle the completion of the item
    toggleComplete() {

        // toggle the completion of the item
        this.complete = !this.complete;
        // toggle the class of the item
        this.dom.classList.toggle("activate");
    }
}