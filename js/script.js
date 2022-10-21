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
			todoData.sort((a,b)=>{
				if (a.completed > b.completed) {
					return 1;
			}
			if (a.completed < b.completed) {
					return -1;
			}
			return 0;
			})
			localStorage.setItem('todo', JSON.stringify(todoData));
			location.reload();
			render();
			arrTodoList();
		})
	})
};


//загрузка localhost при наличии
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
	arrTodoList();
});


//удаление элемента
const arrTodoList = function () {
	let removeItem = document.querySelectorAll('.todo-remove');
	removeItem.forEach((item, indexRemove) => {
		item.addEventListener('click', function (e) {
			let newArray = todoData.filter((item, index) => {
				console.log(item);
				return index !== indexRemove;
			});
			console.log(newArray);
			localStorage.setItem('todo', JSON.stringify(newArray));
			location.reload();
			render();
			arrTodoList();
		})
	})
}

todoData.forEach((item)=>{
	console.log(item.completed);
})

console.log(todoData)
render();

arrTodoList();
