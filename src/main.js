import { List } from "./lib/List";
import "./styles/style.css";

/**
 * WORKFLOW
 * 
 * We have created 2 classes that represent controllers. 
 * The List controller handles taking input from the user and converting it into an item.
 * The Item controller handles the Item's state, we can use it to create/remove/edit the item in the list.
 * To understand the code we start from this file,
 * It calls the List object and passes in the names of the DOM elements that we want to use.
 * The List object is capable of adding items to the list. It also manages the DOM elements for the list (list, input, submit button).
 */



const list = new List("#list", "#input", "#button");