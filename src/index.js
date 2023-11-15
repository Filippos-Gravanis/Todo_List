import "./styles.css"
import { header } from "./header.js"
import { sidebar } from "./sidebar.js"
import { todo } from "./todo.js"
import { filterTodos,todoElementsContainer } from "./todosUiControl.js"
class todoProjects {

    constructor (projects){
        this.projects = ["default"] 
    }

    addProject(name) {
    this.projects.push(name)    
    }
    getProjects(){
        return this.projects
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





function content(todosList,active) {
    todosList.addTodo(new todo('123', '123', '123', '123'))
    todosList.addTodo(new todo('123', '123', '123', '123'))
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('content')
    let todoElements = todoElementsContainer(filterTodos(todosList,active.activeTab))
    contentContainer.appendChild(todoElements)
    return contentContainer
}





function sidebarContentContainer(todosList,projects,active) {
    let mainContainer = document.querySelector(".pageContainer")
    let sidebarContentContainer = document.createElement('div')
    sidebarContentContainer.classList.add('sidebarContent')
    const sidebarr = new sidebar(projects,active)
    const contentContainer = content(todosList,active)
    sidebarContentContainer.appendChild(sidebarr.initializeSidebar())
    sidebarContentContainer.appendChild(contentContainer)
    mainContainer.appendChild(sidebarContentContainer)

}

function mainPageContainer () {
    let todosList = new todos()
    let projects = new todoProjects()
    let active = {
        "activeTab" : "All"
    }
    projects.addProject("adventure")
    projects.addProject("karma")
    header(todosList,projects)
    sidebarContentContainer(todosList,projects,active)
}

mainPageContainer()

