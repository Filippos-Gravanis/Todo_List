import { todoFinder } from "./todoFinder";
function todoElementsContainer(todosList) {
    const todosContainer = document.createElement('div')
    todosContainer.classList.add('todosContainer')
    
    todosList.todoItems.forEach(todo => {
        
        todosContainer.appendChild(todoElement(todo,todosList))

    }

    )
    return todosContainer

}

function EmptyTodosUi(){
    const  todosContainer = document.querySelector('.todosContainer')
    while (todosContainer.lastChild){
        todosContainer.removeChild(todosContainer.lastChild)
    }
    todosContainer.remove()
}

function filterTodos (todoList,active){
    let filteredTodos = {todoItems:[]}
    todoList.todoItems.forEach((todo)=>{
        if (active=="All"){
            filteredTodos = todoList
            return
        }
        else if (active=="Today"){}
        else if (active=="This Week"){}
        else {
            if (todo.group==active){
                filteredTodos.todoItems.push(todo)
            }
        }
    })
    return filteredTodos
}


function todoElement(todoinfo,todosList) {

    const todo = document.createElement('div')
    todo.classList.add("todoCard")

    const title = document.createElement('p')
    title.classList.add('title')
    title.textContent = todoinfo.title

    const todoInfoColumn = document.createElement('div')
    todoInfoColumn.classList.add('todoInfoColumn')
    
    const completed = document.createElement('input')
    completed.type = "checkbox"
    completed.checked = todoinfo.completed
    completed.addEventListener('click',(ev)=>{
        const todoIndex = new todoFinder(todoinfo,todosList.todoItems)
        todosList.todoItems[todoIndex.find()].completed = ev.target.checked
        
    })

    const dueDate = document.createElement('p')
    dueDate.textContent = todoinfo.duedate
    dueDate.classList.add('dueDate')
    
    
    todoInfoColumn.appendChild(title)
    todoInfoColumn.appendChild(dueDate)

    todo.appendChild(completed)
    todo.appendChild(todoInfoColumn)
    
    return todo

}


export {todoElement,todoElementsContainer,filterTodos,EmptyTodosUi}