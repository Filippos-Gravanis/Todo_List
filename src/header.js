import { addTododialog } from "./addTodoDialog";


export function header(todosList,projectList,active) {
    const mainContainer = document.querySelector('.pageContainer');
    const headerContainer = document.createElement('div');
    const headerLogo = document.createElement('p');
    const addTodoButton = document.createElement('button')
    const addButtonContainer = document.createElement('div')
    addButtonContainer.classList.add('addButtonContainer')
    addTodoButton.textContent = "+ Add Todo"
    addTodoButton.classList.add('addTodoButton')
    addTodoButton.addEventListener('click', () => addTododialog(todosList,projectList,active))
    headerContainer.classList.add('header');
    headerLogo.classList.add('logo')
    headerLogo.textContent = "TodoList";
    addButtonContainer.appendChild(addTodoButton)
    headerContainer.appendChild(headerLogo)
    headerContainer.appendChild(addButtonContainer)
    mainContainer.appendChild(headerContainer)
}
