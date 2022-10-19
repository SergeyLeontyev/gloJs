const todoControl = document.querySelector('.todo-control');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
const headerInput = document.querySelector('.header-input');
let todoData = [];



const render = function () {
	todoList.innerHTML = '';
	todoCompleted.innerHTML = '';
	todoData.forEach(function (item) {
		const li = document.createElement('li');
		li.classList.add('todo-item');
		li.innerHTML = `<span class="text-todo">${item.text}</span>
			<div class="todo-buttons"><button class="todo-remove"></button>
			<button class="todo-complete"></button></div>`;
		if (item.completed) {
			todoCompleted.append(li);
		} else {
			todoList.append(li);
		}
		li.querySelector('.todo-complete').addEventListener('click', function () {
			item.completed = !item.completed;
			render();
		})
	})
};



if (localStorage.getItem('todo')) {
	todoData = JSON.parse(localStorage.getItem('todo'));
	render();
}

//Отмена стандартного действия отправки формы и добавление в список
todoControl.addEventListener('submit', function (event) {
	event.preventDefault();

	if (headerInput.value == 0 || headerInput.value == '' || headerInput.value.match(/^[ ]+$/)) {
		alert('Введите задачу');
		headerInput.value = '';
	} else {
		const newTodo = {
			text: headerInput.value,
			completed: false
		};
		todoData.push(newTodo);
		localStorage.setItem('todo', JSON.stringify(todoData));
		headerInput.value = '';
	}
	render();
});

const arrTodoList = function () {

	let listItem = todoList.querySelectorAll('.todo-item');
	let removeItem = todoList.querySelectorAll('.todo-remove');



	removeItem.forEach((item) => {
		item.addEventListener('click', function (e) {
			let target = e.target;
			target.parentNode.parentNode.remove();
			listItem.forEach((item) => {
				const newTodo = {
					text: item.textContent.trim(),
					completed: false
				};
				todoData.length = 0;
				todoData.push(newTodo);
				localStorage.setItem('todo', JSON.stringify(todoData));
			})
			console.log(target)
		})
	})
}

arrTodoList();
