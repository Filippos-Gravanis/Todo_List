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

    const todoExtraInfo = document.createElement('div')
    todoExtraInfo.classList.add('todoExtraInfo')
    
    const priority = document.createElement('p')
    priority.textContent = todoinfo.priority + " priority"
    priority.classList.add(importanceStyling(todoinfo.priority))

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
    
    todoExtraInfo.appendChild(dueDate)
    todoExtraInfo.appendChild(priority)
    
    todoInfoColumn.appendChild(title)
    todoInfoColumn.appendChild(todoExtraInfo)

    todo.appendChild(completed)
    todo.appendChild(todoInfoColumn)
    
    return todo

}

function importanceStyling(importance){
    if (importance=='Low'){
        return 'lowPriority'
    }
    else if (importance=='Medium'){
        return 'mediumPriority'
    }
    else {
        return 'highPriority'
    }
}

export {todoElement,todoElementsContainer,filterTodos,EmptyTodosUi}