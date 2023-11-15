function todoElementsContainer(todosList) {
    const todosContainer = document.createElement('div')
    todosContainer.classList.add('todosContainer')
    todosList.todoItems.forEach(todo => {
        todosContainer.appendChild(todoElement(todo))

    }

    )
    return todosContainer

}

function filterTodos (todoList,active){
    let filteredTodos = []
    console.log(active);
    todoList.todoItems.forEach((todo)=>{
        if (active=="All"){
            filteredTodos = todoList
            console.log(1);
            return
        }
        else if (active=="Today"){}
        else if (active=="This Week"){}
        else {
            if (todo.group==active){
                filteredTodos.push(todo)
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


export {todoElement,todoElementsContainer,filterTodos}