export function generateId() {
    return Math.random().toString(36).substring(2, 9);
}
export function makeDOM(name) {
    return document.createElement(name);
}