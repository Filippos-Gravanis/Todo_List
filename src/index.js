import "./styles.css"
import { header } from "./header.js"
import { sidebar } from "./sidebar.js"
import { todo } from "./todo.js"
import { todoFinder } from "./todoFinder.js"
import { filterTodos,todoElementsContainer } from "./todosUiControl.js"
import { storedTodos } from "./storedTodos.js"
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
        this.todoItems = storedTodos().getTodos()
    }

    addTodo(todo) {
        this.todoItems.push(todo)
        storedTodos().setTodos(this.todoItems)
    }

    deleteTodo(todo) {
        let todoToDelete = new todoFinder(todo, this.todoItems)
        this.todoItems.splice(todoToDelete.find(), 1)
        storedTodos().setTodos(this.todoItems)
    }
}







function content(todosList,active) {
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('content')
    let todoElements = todoElementsContainer(filterTodos(todosList,active.activeTab),active)
    contentContainer.appendChild(todoElements)
    return contentContainer
}





function sidebarContentContainer(todosList,projects,active) {
    let mainContainer = document.querySelector(".pageContainer")
    let sidebarContentContainer = document.createElement('div')
    sidebarContentContainer.classList.add('sidebarContent')
    const contentContainer = content(todosList,active)
    const sidebarr = new sidebar(projects,active,todosList)
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
    header(todosList,projects,active)
    sidebarContentContainer(todosList,projects,active)
}

mainPageContainer()

