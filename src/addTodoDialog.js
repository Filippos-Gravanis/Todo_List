
import { todo } from "./todo.js"
import { filterTodos,EmptyTodosUi,todoElementsContainer } from "./todosUiControl";
export function addTododialog(todosList, projectList, active) {
    const mainContainer = document.querySelector('.pageContainer')
    if (!document.querySelector('dialog')) {

        const container = document.createElement('dialog')
        container.id = "todoDialog"
        container.appendChild(addTodoform(todosList, projectList, active))

        mainContainer.appendChild(container)
        container.showModal()
    }
    else {
        document.querySelector('dialog').showModal()
    }

}


function addTodoform(todosList, projectList,active) {
    const addTodoForm = document.createElement('form')
    const header = document.createElement('h2')
    header.textContent = "New Todo"
    const formSubmitButton = document.createElement('button')
    formSubmitButton.classList.add("formSubmitButton")
    formSubmitButton.textContent = "Add Todo"
    formSubmitButton.type = "submit"
    addTodoForm.id = "addTodoForm"

    addTodoForm.addEventListener('submit', (event) => {
        event.preventDefault()
        
        todosList.addTodo(new todo(document.querySelector("#text").value, document.querySelector("#date").value,

            document.querySelector("#importance").value, document.querySelector("#projects").value))
        EmptyTodosUi()
        document.querySelector('.content').appendChild(todoElementsContainer(filterTodos(todosList, active.activeTab)))
        document.querySelector('dialog').close()
    })
    addTodoForm.appendChild(header)
    const textInputed = formItem('text', "text")
    textInputed.id = "textInputed"
    addTodoForm.appendChild(textInputed)
    const dateInputed = formItem('date', "date")
    dateInputed.id = "dateInputed"
    addTodoForm.appendChild(dateInputed)
    const projectInputed = formSelectItem('projects', projectList)
    projectInputed.id = "projectInputed"
    addTodoForm.appendChild(projectInputed)
    const importanceInputed = formSelectItem('importance', ['Low', 'Medium', 'High'])
    importanceInputed.id = "importanceInputed"
    addTodoForm.appendChild(importanceInputed)
    addTodoForm.appendChild(formSubmitButton)
    return addTodoForm
}


function formItem(label, type) {
    const formItemContainer = document.createElement('div')
    const formItemLabel = document.createElement('label')
    formItemContainer.classList.add('formItem')
    formItemLabel.htmlFor = label
    formItemLabel.textContent = label + " : "
    formItemContainer.appendChild(formItemLabel)
    if (type == "text") {
        const formInputItem = document.createElement('input')
        formInputItem.required = true
        formInputItem.id = label
        formInputItem.type = type
        formInputItem.name = label
        formItemContainer.appendChild(formInputItem)
    }
    else if (type == "date") {
        const formDateInput = document.createElement('input')
        formDateInput.required = true
        formDateInput.type = type
        formDateInput.id = label
        formDateInput.name = label
        formItemContainer.appendChild(formDateInput)
    }



    return formItemContainer

}


function formSelectItem(label, options) {
    const formItemContainer = document.createElement('div')
    formItemContainer.classList.add('formItem')
    const formSelectItemLabel = document.createElement('label')
    formSelectItemLabel.htmlFor = label
    formSelectItemLabel.textContent = label + " :"
    const formSelectItem = document.createElement('select')
    formSelectItem.id = label
    formSelectItem.name = label
    formSelectItem.required = true
    formSelectItem.classList.add("formSelect" + label)

    
    if (options.projects) {
        options.projects.forEach((project) => {
            const selectorOption = document.createElement('option')
            selectorOption.value = project
            selectorOption.textContent = project
            formSelectItem.appendChild(selectorOption)
        })
    }
    else {
        options.forEach(option => {
            const selectorOption = document.createElement('option')
            selectorOption.value = option
            selectorOption.textContent = option
            formSelectItem.appendChild(selectorOption)
        })
    }

    formItemContainer.appendChild(formSelectItemLabel)
    formItemContainer.appendChild(formSelectItem)
    return formItemContainer
}


