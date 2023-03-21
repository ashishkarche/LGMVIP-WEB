window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const inpuText = document.querySelector("#new-task-input");
	const list_element = document.querySelector("#tasks");
	const clearAllButton = document.querySelector('#clear-all-button');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = inpuText.value;

		const task_element = document.createElement('div');
		task_element.classList.add('task');

		const task_content_element = document.createElement('div');
		task_content_element.classList.add('content');

		task_element.appendChild(task_content_element);

		const task_input_elment = document.createElement('input');
		task_input_elment.classList.add('text');
		task_input_elment.type = 'text';
		task_input_elment.value = task;
		task_input_elment.setAttribute('readonly', 'readonly');

		task_content_element.appendChild(task_input_elment);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_element.appendChild(task_actions_el);

		list_element.appendChild(task_element);

		inpuText.value = '';
		// add event listener to edit or update the task
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_elment.removeAttribute("readonly");
				task_input_elment.focus();
				

			} else {
				task_edit_el.innerText = "Edit";
				task_input_elment.setAttribute("readonly", "readonly");
			}
			
		});
		// add even listener ti delete a task
		task_delete_el.addEventListener('click', (e) => {
			list_element.removeChild(task_element);
			alert("Task Deleted!!!")
		});


		// add event listener to clear all button
		clearAllButton.addEventListener('click', () => {
			// remove all tasks from the To-Do List

			list_element.innerHTML = '';
			if (list_element.children.length === 0) {
				alert('All tasks cleared!');
			}


			// while (list_element.firstChild) {
			// 	list_element.removeChild(list_element.firstChild);

			// }
		});

	});
});