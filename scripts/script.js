const todolist = [];

function clearTodolist() {
  const todolistBody = document.getElementById("todolistBody");
  while (todolistBody.firstChild) {
    todolistBody.removeChild(todolistBody.firstChild);
  }
}

function removeTodolist(index) {
  todolist.splice(index, 1);
  displayTodoList();
}
// add todolist
function addTodoList(index, todo) {
  const tr = document.createElement("tr");
  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  buttonDone.className = "btn btn-info";
  buttonDone.onclick = function () {
    removeTodolist(index);
  };
  tdButton.appendChild(buttonDone);
  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);
  const todolistbody = document.getElementById("todolistBody");
  todolistbody.appendChild(tr);
}
// showing todolist
function displayTodoList() {
  clearTodolist();
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const searchText = document.getElementById("search").value.toLowerCase();
    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(i, todo);
    }
  }
}

document.forms["todoForm"].onsubmit = function (event) {
  event.preventDefault();
  const todo = document.forms["todoForm"]["todo"].value;
  todolist.push(todo);
  document.forms["todoForm"].reset();
  console.log(todolist);
  displayTodoList();
};

const searchinput = document.getElementById("search");
searchinput.onkeyup = function () {
  displayTodoList();
};
searchinput.onkeydown = function () {
  displayTodoList();
};
