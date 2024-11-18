import { generateId, makeDOM } from "./utils";

export class Item {
    id = generateId();
    dom = null;
    complete = false;
    data = "";
    constructor(data) {
        this.data = data;
        this.createDOM();
    }
    createDOM(){
        const item = makeDOM("section");

        const header = makeDOM("div");
        const title = makeDOM("h3");
        
        const footer = makeDOM("div");
        const removeButton = makeDOM("button");
        const completeButton = makeDOM("button");
        
        item.classList.add("item");
        
        header.classList.add("header");
        title.textContent = this.data;
        footer.classList.add("footer");
        removeButton.classList.add("remove");
        completeButton.classList.add("complete");
        removeButton.textContent = "Remove";
        completeButton.textContent = "Complete";

        removeButton.addEventListener("click", () => {
            this.dom.remove();
        });
        completeButton.addEventListener("click", () => {
            this.toggleComplete();
        });

        item.append(header);
        header.append(title);
        item.append(footer);
        footer.append(removeButton);
        footer.append(completeButton);
        this.dom = item;
    }
    toggleComplete(){
        this.complete = !this.complete;
        this.dom.classList.toggle("activate");
    }
}