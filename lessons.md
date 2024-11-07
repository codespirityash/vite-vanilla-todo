# Lessons for the project
With this branch, you can learn how to create a production level project


## How to create a production level project

There are a few things you need to understand before you create or work on a project.
- Programming Concepts
    - Variables
    - Functions
    - Objects
    - Arrays
    - Control Flow
    - Loops
    - Async
    - Api
- Text editor
    - VS Code
- Writing beautiful code
    - Linting
    - Prettier
    - ESLint
    - Efficiency
    - Self documenting code patterns
- Git
    - Git Commands
    - Git Flow

- Build Tools
    - Vite
- Testing
    - Jest

To learn the extent of any programming language, you need to start by creating a project. while creating the project, you need to look up how to do things in the language you are learning.

If you are making a todolist, you need to know how funcitons, arrays, objects, and loops work(other things as well).

#### Lets make a todo list

- Language: JavaScript
- Build Tool: Vite
- Version Control: Git

To Initiate a project with `vite`

```bash
npm create vite
```
and answer the questions it asks.

Open the project in VS Code.

```bash
code .project-dest
```

Get to know the file structure.

Lets start by writing some code

### HTML 

Tags are the building blocks of HTML, there many tags in HTML that are important to understand. Lets get to know some

User Interaction
- Input
- Button
- Label
- Checkbox
- Radio
- Select
- Textarea
- Form

Typography
- Heading
- Paragraph
- Span
- Emphasis
- Strong
- Cite
- Del
- Ins
- Mark
- Subscript
- Superscript
- Abbreviation
- Address
- Blockquote 

Layout
- Div
- Span


All tags have attributes

Example:

```html

<input 
    id="task-input"
    value=""
    placeholder="What do you need to do today?..."
    style="background-color: #f9f9f9;"    
>

<button 
    id="add-task" 
    style="background-color: #f9f9f9;" 
    onclick="addTask(document.getElementById('task-input').value)"
    class="button"
>
Add Task
</button>
```

You can design layout using div tags and give them structure using CSS.

```html
<div class="list">
    <div class="item">
        <div class="text"></div>
    </div>
    <div class="item">
        <div class="text"></div>
    </div>
    <div class="item">
        <div class="text"></div>
    </div>
</div>
```

lets take this and recreate it using JS next

## JavaScript

```javascript
console.log("Hello World");
```

#### Function examples

```javascript
function addTask(text) {
    console.log(text);
}
// other ways to define a function

// nameless / anonymous function
const addTask = (text) => {
    console.log(text);
}
// functions inside functions
const addTask = (text) => {
    //this is a nested function
    const makeTask = ()=>{
        console.log(text);
    }
    makeTask();
}
//  Function returning a function
function addTask(text) {
    return () => {
        console.log(text);
    }
}
```
#### Loops

```javascript
// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```
#### Variables

```javascript
let variableName = "value";
const constant = "value";
var variable = "value";
// datatypes
Number
String
Boolean
undefined
null
Symbol
Object
Array
// data structures

const task = {
    id: 1,
    text: "Learn JavaScript",
    completed: false
}
// nestable data structures
const list = [
    {
        id: 1,
        text: "Learn JavaScript",
        completed: false
    },
    {
        id: 2,
        text: "Learn JavaScript",
        completed: false
    },
]
// OOPS
class Task {
    constructor(id, text, completed){
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    toggleCompleted(){
        this.completed = !this.completed;
    }
}
class TaskList {
    constructor(){
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }
    removeTask(taskId){
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    toggleCompleted(taskId){
        const task = this.tasks.find(task => task.id === taskId);
        if(task){
            task.toggleCompleted();
        }
    }
}

```

#### DOM

```javascript
// get elements
const elementById = document.getElementById("id");
const elementByClass = document.getElementsByClassName("class");
const elementByTagName = document.getElementsByTagName("tag");
const elementByQuerySelector = document.querySelector("selector");
const elementByQuerySelectorAll = document.querySelectorAll("selector");
// get attributes
const attribute = element.getAttribute("attribute");
// set attributes
element.setAttribute("attribute", "value");
// add event listeners
element.addEventListener("click", () => {
    console.log("clicked");
});
// remove event listeners
element.removeEventListener("click", () => {
    console.log("clicked");
});
// remove element from DOM
element.remove();
// inner text
element.innerText;
// inner HTML
element.innerHTML;
// add to parent
parent.append(child);
// add child to element
element.append(child); 
```