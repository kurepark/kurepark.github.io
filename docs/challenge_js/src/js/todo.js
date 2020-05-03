const todoForm = document.querySelector('.todo_form'),
todoInput = todoForm.querySelector('.tf_input'),
todoList = document.querySelector('.todo_list'),
todoLS = "todo";

let todoArray = [];

function deleteTodo(e){
    const delTarget = e.target,
    targetLi = delTarget.parentNode;
    
    todoList.removeChild(targetLi);

    const newTodoArray = todoArray.filter(function(item){
        console.log(targetLi.id); 
        return item.id !== parseInt(targetLi.id);
    })

    todoArray = newTodoArray;
    saveTodo();
}

function saveTodo() {
    localStorage.setItem(todoLS, JSON.stringify(todoArray));
}

function paintTodo(text) {
    const todoLi = document.createElement("li"),
    delBtn = document.createElement("button"),
    todoSpan = document.createElement("span"),
    todoId = todoArray.length + 1;

    delBtn.innerText = 'X';
    delBtn.addEventListener('click',deleteTodo);//x btn click
    todoSpan.innerText = text;
    todoLi.appendChild(delBtn);
    todoLi.appendChild(todoSpan);
    todoLi.id = todoId;
    todoList.appendChild(todoLi);

    todoObj = {
        id: todoId,
        todo: text
    }
    todoArray.push(todoObj);
    saveTodo();
}

function loadTodo(){
    const loadTodo = localStorage.getItem(todoLS);
    if(loadTodo !== null) {
        //값이 있으면 실행
        const parseTodo = JSON.parse(loadTodo);
        parseTodo.forEach(function(item){
            paintTodo(item.todo);
        })
    }
}

function handleTodo(e) {
    e.preventDefault();
    const todo = todoInput.value;
    paintTodo(todo);
    todoInput.value = "";
}

function init() {
    loadTodo();
    todoForm.addEventListener('submit', handleTodo);
}

init();