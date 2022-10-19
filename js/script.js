//todo-control
//todo-list
//todo-completed
//header-input

document.addEventListener('DOMContentLoaded', () => {
	const todoControl = document.querySelector('.todo-control');
	const todoList = document.querySelector('.todo-list');
	const todoCompleted = document.querySelector('.todo-completed');
	const headerInput = document.querySelector('.header-input');
	const todoData = [];

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


	//Отмена стандартного действия отправки формы
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
			headerInput.value = '';
		}
		render();
	});
});