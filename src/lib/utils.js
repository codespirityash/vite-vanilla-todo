
// generates a random id
export function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

// creates a DOM element
export function makeDOM(name) {
    return document.createElement(name);
}