// declare variables from DOM
const form = document.querySelector(".form");
const input = document.querySelector("#task");
const addButton = document.querySelector(".button");
const list = document.querySelector("#list");
const removeButton = document.querySelector(".delete-button");

// define an empty array for storing all todos
let todoList = [];

// this function re-renders UI on every todo adding.
const renderDOM = () => {
  list.innerHTML = "";

  // map todoList and create new li node for all todo item
  todoList.map((todo) => {
    const li = document.createElement("li");

    li.id = todo.id;
    li.classList =
      "todo-item d-flex justify-content-between align-items-center";
    li.dataset.checked = todo.checked;
    li.innerHTML = `
    ${todo.name}<span class="delete-button btn btn-danger">&times;</span>
    `;

    list.append(li); // append the nodes to the dom ul list
  });
};

// this function updates localStorage
const addLocalStorage = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));

  renderDOM();
};

// this function gets the data from localStorage
const getLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todoList"));

  // if there is a todos take the data, otherwise create a new array to prevent error
  todos ? (todoList = todos) : (todolist = []);

  renderDOM();
};

/* this functions creates a new todo object and append it to the todoList array.
 then adds this array to the localStorage */
const addTodo = (item) => {
  // jquery toast stuff
  if (!item) {
    $("#error").toast("show");
    return false;
  } else {
    $("#added").toast("show");
  }

  // create a new object with props
  const todo = {
    id: Date.now(),
    name: item,
    checked: false,
  };

  // push todo to list and add list to the localStorage
  todoList.push(todo);
  addLocalStorage(todoList);

  input.value = ""; // clear input value after adding
};

// toggle function adds toggle functionality to list items
// todos forEach and item.id not equal to item toggle it
// invokes addlocalstorage with todos
const toggleTodo = (item) => {
  // toggle dataset-checked
  todoList.map((item) => {
    if (item.checked === false) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });

  // toggle classname
  if (!item.className.includes("checked")) {
    item.classList.add("checked");
    item.dataset.checked = true;
  } else {
    item.classList.remove("checked");
    item.dataset.checked = false;
  }
};

// remove todo function
// filter todos with item argument and if todo.item.id is not equal to item id
const removeTodo = (item) => {
  const parent = item.parentElement;
  const id = parent.id;

  todoList.filter((todo) => {
    if (todo.id != id) {
      console.log("ananz");
    }
  });

  parent.remove();

  localStorage.setItem("todoList", JSON.stringify(todoList));
};

// addeventlistener for toggling and removing todo
list.addEventListener("click", (e) => {
  // if its li node element ( todo-items itself )
  if (e.target.className.includes("todo-item")) {
    toggleTodo(e.target);

    // if its span node element ( delete todo button )
  } else if (e.target.className.includes("delete-button")) {
    removeTodo(e.target);
  }
});

// addeventlistener for adding todo on button submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(input.value);
});

getLocalStorage();
