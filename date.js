// 할 일 목록 저장 배열
let todos = [];

// DOM 요소 가져오기
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// 할 일 추가 함수
function addTodo() {
  const todoText = todoInput.value;
  if (todoText) {
    const todoItem = {
      id: Date.now(),
      text: todoText,
      completed: false
    };

    todos.push(todoItem);
    saveTodos();
    renderTodos();

    todoInput.value = '';
  }
}

// 할 일 완료 함수
function toggleTodoStatus(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });

  saveTodos();
  renderTodos();
}

// 할 일 삭제 함수
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);

  saveTodos();
  renderTodos();
}

// 할 일 목록 렌더링 함수
function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodoStatus(todo.id));

    const todoText = document.createElement('span');
    todoText.innerText = todo.text;
    if (todo.completed) {
      todoText.classList.add('completed');
    }

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));

    const todoItem = document.createElement('li');
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
  });
}

// 할 일 목록 불러오기
function loadTodos() {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    renderTodos();
  }
}

// 할 일 목록 저장하기
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// 이벤트 리스너 등록
todoForm.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

// 할 일 목록 초기화
loadTodos();
