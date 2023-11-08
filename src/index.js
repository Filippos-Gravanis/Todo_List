import "./styles.css"
class todo {
    constructor (title,description,duedate,priority){
        this.id = Date.now()+ Math.floor( Math.random() * 100000)
        this.title = title
        this.description = description
        this.duedate = duedate
        this.priority = priority
    }
}

class todos {
    constructor (){
        this.todoItems= []
    }

    addTodo(todo){
        this.todoItems.push(todo)
    }

    deleteTodo(todo){
        let todoToDelete = new todoFinder(todo,this.todoItems)
        this.todoItems.splice(todoToDelete.find(),1)
        console.log(this.todoItems)
    }
}

class todoFinder {
    constructor (todo,todos){
        this.todo = todo
        this.todos = todos
    }
    
    find(){
    let index = 0
    this.todos.forEach(listTodo => {
        
        if (listTodo.id ==this.todo.id){
            index = this.todos.indexOf(listTodo)
        }
    })
    return index
}
    
}




function header () {
    const mainContainer = document.querySelector('.pageContainer');
    const headerContainer = document.createElement('div');
    const headerLogo = document.createElement('p');
    headerContainer.classList.add('header');
    headerLogo.classList.add('logo')
    headerLogo.textContent = "TodoList";
    headerContainer.appendChild(headerLogo)
    mainContainer.appendChild(headerContainer)
}
header()


function Sidebar () {
    const sidebarContainer = document.createElement('div')
    sidebarContainer.classList.add('sidebar')
    console.log(sidebarContainer);
    sidebarContainer.appendChild(createNavItem("All"))
    sidebarContainer.appendChild(createNavItem("Today"))
    sidebarContainer.appendChild(createNavItem("This Week"))
    return sidebarContainer
}


function createNavItem (text) {
    const navItem = document.createElement('div')
    navItem.textContent = text
    navItem.classList.add('navItem')
    navItem.addEventListener('click',(ev)=>{
        const navItems = document.querySelectorAll(".navItem")
        navItems.forEach(Item => {
            if (Item.classList.contains('active')){
                Item.classList.remove('active')
            }
        });
        ev.target.classList.add('active')
    })
    return navItem
    



}

function todosContainer (todosList){ 
    const todosContainer =  document.createElement('div')
    todosList.todoItems.forEach( todo =>{
        todosContainer.appendChild(todoElement(todo))

    }
    
    )
    return todosContainer

}

function content (){
    let todosList = new todos()
    todosList.addTodo(new todo('123','123','123','123'))
    todosList.addTodo(new todo('123','123','123','123'))
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('content')
    let todoss = todosContainer(todosList)
    contentContainer.appendChild(todoss)
    return contentContainer
}




function todoElement(todoinfo){
    const todo = document.createElement('div')
    todo.classList.add("flx-clm")
    const title = document.createElement('h3')
    const description = document.createElement('p')
    title.textContent = todoinfo.title
    description.textContent = todoinfo.description
    todo.appendChild(title)
    todo.appendChild(description)
    return todo

}

function sidebarContentContainer(){
    let mainContainer = document.querySelector(".pageContainer")
    let sidebarContentContainer = document.createElement('div')
    sidebarContentContainer.classList.add('sidebarContent')
    const sidebar = Sidebar()
    console.log(sidebar);
    const contentContainer = content()
    sidebarContentContainer.appendChild(sidebar)
    sidebarContentContainer.appendChild(contentContainer)
    mainContainer.appendChild(sidebarContentContainer)    
    
}
sidebarContentContainer()