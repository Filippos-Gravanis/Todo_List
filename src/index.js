import "./styles.css"
class todo {
    constructor (title,description,date){
        this.title = title
        this.description = description
        this.date = date
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
    document.querySelector('.pageContainer').appendChild(sidebarContainer)
    createNavItem("All")
    createNavItem("Today")
    createNavItem("This Week")
    createNavItem("This Week")
}


function createNavItem (text) {
    const sidebar = document.querySelector('.sidebar')
    const navItem = document.createElement('div')
    navItem.textContent = text
    navItem.classList.add('navItem')
    sidebar.appendChild(navItem)



}
Sidebar()