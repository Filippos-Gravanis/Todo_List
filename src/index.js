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


let todos = new todos()


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
    let selectedItem = 'All'
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


function content (){
    let contentContainer = document.createElement('div')
    return contentContainer
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