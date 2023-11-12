import "./styles.css"
import { header } from "./header.js"
import { sidebar } from "./sidebar.js"
import { todo } from "./todo.js"

class todoProjects {

    constructor (projects){
        this.projects = ["none"] 
    }

    addProject(name) {
    this.projects.push(name)    
    }
}

class todos {
    constructor() {
        this.todoItems = []
    }

    addTodo(todo) {
        this.todoItems.push(todo)
    }

    deleteTodo(todo) {
        let todoToDelete = new todoFinder(todo, this.todoItems)
        this.todoItems.splice(todoToDelete.find(), 1)
        console.log(this.todoItems)
    }
}

class todoFinder {
    constructor(todo, todos) {
        this.todo = todo
        this.todos = todos
    }

    find() {
        let index = 0
        this.todos.forEach(listTodo => {

            if (listTodo.id == this.todo.id) {
                index = this.todos.indexOf(listTodo)
            }
        })
        return index
    }

}



function todosContainer(todosList) {
    const todosContainer = document.createElement('div')
    todosContainer.classList.add('todosContainer')
    todosList.todoItems.forEach(todo => {
        todosContainer.appendChild(todoElement(todo))

    }

    )
    return todosContainer

}

function content(todosList) {
    todosList.addTodo(new todo('123', '123', '123', '123'))
    todosList.addTodo(new todo('123', '123', '123', '123'))
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('content')
    let todoss = todosContainer(todosList)
    contentContainer.appendChild(todoss)
    return contentContainer
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

function sidebarContentContainer(todosList) {
    let mainContainer = document.querySelector(".pageContainer")
    let sidebarContentContainer = document.createElement('div')
    sidebarContentContainer.classList.add('sidebarContent')
    const sidebarr = sidebar()
    const contentContainer = content(todosList)
    sidebarContentContainer.appendChild(sidebarr)
    sidebarContentContainer.appendChild(contentContainer)
    mainContainer.appendChild(sidebarContentContainer)

}

function mainPageContainer () {
    let todosList = new todos()
    let projects = new todoProjects()
    projects.addProject("adventure")
    header(todosList,projects)
    sidebarContentContainer(todosList,projects)
}

mainPageContainer()

