const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    if (li) {
        li.remove();  // li가 null이 아닌 경우에만 remove() 호출
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        saveToDos();
    } else {
        console.error("해당 li 요소를 찾을 수 없습니다.");
    }
}

function toggleComplete(event) {
    const li = event.target.parentElement;
    li.classList.toggle("completed");
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", deleteToDo);
    const completeButton = document.createElement("button");
    completeButton.innerText = "✔️";
    completeButton.addEventListener("click", toggleComplete);
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
