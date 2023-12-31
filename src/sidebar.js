import { clearDiv } from "./clearDiv";
import { filterTodos,todoElementsContainer,EmptyTodosUi } from "./todosUiControl.js"
export class sidebar {
    constructor(projects, index,todosList) {
        this.projects = projects
        this.index = index
        this.todosList = todosList
    }
    initializeSidebar() {
        const sidebarContainer = document.createElement('div')
        sidebarContainer.classList.add('sidebar')
        
        const projectsHeader = document.createElement('div')
        projectsHeader.id = 'projectsHeader'
        const projectsTag = document.createElement('p')
        projectsTag.textContent = "Projects"
        const addProjectButton = document.createElement('button')
        addProjectButton.textContent = "+"
        addProjectButton.id = 'projectsHeaderBtn'
        addProjectButton.addEventListener('click', () => {
            if (document.querySelector('#addProjectDialog')) {
                this.removeAddProjectDialog()
            }
            else {
                const projectsList = document.querySelector('#projectsList')
                projectsList.prepend(this.addProjetDialog(this.projects))
            }
        })
        projectsTag.classList.add('projectsTag')
        projectsHeader.appendChild(projectsTag)
        projectsHeader.appendChild(addProjectButton)
        const allNavItem = this.createNavItem("All")
        allNavItem.classList.add("active")
        sidebarContainer.appendChild(allNavItem)
        sidebarContainer.appendChild(this.createNavItem("Today"))
        sidebarContainer.appendChild(this.createNavItem("This Week"))
        sidebarContainer.appendChild(projectsHeader)
        sidebarContainer.appendChild(this.projectsList(this.projects,this.todosList))
        const navItems = document.querySelectorAll('navItem')
        
        return sidebarContainer
    }


    createNavItem(text) {
        const navItem = document.createElement('div')
        navItem.textContent = text
        navItem.classList.add('navItem')
        navItem.addEventListener('click', (ev) => {
            let navItems = document.querySelectorAll(".navItem")
            
            navItems.forEach(Item => {
                if (Item.classList.contains('active')) {
                    Item.classList.remove('active')
                }
            });
            ev.target.classList.add('active')
            
            this.index.activeTab = ev.target.innerText
            EmptyTodosUi()
            document.querySelector('.content').appendChild(todoElementsContainer(filterTodos(this.todosList,this.index.activeTab)),this.index)
        })
        return navItem




    }



    addProjetDialog() {
        const dialogContainer = document.createElement('div')
        const newProjectNameInput = document.createElement('input')
        const addButton = document.createElement('button')
        dialogContainer.id = "addProjectDialog"
        addButton.textContent = "Add"
        addButton.addEventListener('click', () => {
            this.projects.addProject(newProjectNameInput.value)
            clearDiv(document.querySelector('#addProjectDialog'))
            document.querySelector('#projectsList').appendChild(this.addprojectItem(newProjectNameInput.value))
        })
        dialogContainer.appendChild(newProjectNameInput)
        dialogContainer.appendChild(addButton)
        return dialogContainer

    }

    removeAddProjectDialog() {
        const dialogContainer = document.querySelector('#addProjectDialog')
        while (dialogContainer.lastChild) {
            dialogContainer.removeChild(dialogContainer.lastChild)
        }
        dialogContainer.remove()
    }


    projectsList() {
        const projectsList = document.createElement('div')
        projectsList.id = "projectsList"
        this.projects.getProjects().forEach((project) => {

            projectsList.appendChild(this.addprojectItem(project))
        })
        return projectsList

    }

    addprojectItem(project) {
        const projectItemContainer = document.createElement('div')
        projectItemContainer.classList.add('projectItem')
        projectItemContainer.classList.add('navItem')
        projectItemContainer.textContent = project
        projectItemContainer.addEventListener('click', ev => {
            let navItems = document.querySelectorAll(".navItem")
            
            
            navItems.forEach(Item => {
                if (Item.classList.contains('active')) {
                    Item.classList.remove('active')
                }
            });
            ev.target.classList.add('active')
            this.index.activeTab = ev.target.innerText
            
            EmptyTodosUi()
            document.querySelector('.content').appendChild(todoElementsContainer(filterTodos(this.todosList,this.index.activeTab),this.index))
            

            
        })
        return projectItemContainer
    }

}