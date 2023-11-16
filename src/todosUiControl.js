function todoElementsContainer(todosList) {
    const todosContainer = document.createElement('div')
    todosContainer.classList.add('todosContainer')
    console.log(todosList.todoItems);
    todosList.todoItems.forEach(todo => {
        console.log(2);
        todosContainer.appendChild(todoElement(todo))

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


function todoElement(todoinfo) {
    const todo = document.createElement('div')
    todo.classList.add("todoCard")
    const title = document.createElement('p')
    const divider = document.createElement('hr')
    divider.classList.add('divider')
    title.classList.add('title')
    title.textContent = todoinfo.title
    todo.appendChild(title)
    todo.appendChild(divider)
    return todo

}


export {todoElement,todoElementsContainer,filterTodos,EmptyTodosUi}