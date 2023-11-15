import { clearDiv } from "./clearDiv";

export function sidebar (projects){

    const sidebarContainer = document.createElement('div')
    sidebarContainer.classList.add('sidebar')
    console.log(sidebarContainer);
    const projectsHeader = document.createElement('div') 
    projectsHeader.id = 'projectsHeader'
    const projectsTag = document.createElement('p')
    projectsTag.textContent = "Projects"
    const projectsHeaderBtn = document.createElement('button')
    projectsHeaderBtn.textContent = "+"
    projectsHeaderBtn.id = 'projectsHeaderBtn'
    projectsHeaderBtn.addEventListener('click',()=>{
        if (document.querySelector('#addProjectDialog')){
            removeAddProjectDialog()
        }
        else{
        const projectsList = document.querySelector('#projectsList')
        projectsList.prepend(addProjetDialog(projects))
        }
    })
    projectsTag.classList.add('projectsTag')
    projectsHeader.appendChild(projectsTag)
    projectsHeader.appendChild(projectsHeaderBtn)
    sidebarContainer.appendChild(createNavItem("All"))
    sidebarContainer.appendChild(createNavItem("Today"))
    sidebarContainer.appendChild(createNavItem("This Week"))
    sidebarContainer.appendChild(projectsHeader)
    sidebarContainer.appendChild(projectsList(projects))
    return sidebarContainer
}

function createNavItem (text) {
    const navItem = document.createElement('div')
    navItem.textContent = text
    navItem.classList.add('navItem')
    navItem.addEventListener('click',(ev) => {
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

function setActive(){
    
}

function addProjetDialog (projects) {
    const dialogContainer  = document.createElement('div')
    const newProjectNameInput = document.createElement('input')
    const addButton = document.createElement('button')
    dialogContainer.id = "addProjectDialog"
    addButton.textContent = "Add"
    addButton.addEventListener('click',()=>{
        projects.addProject(newProjectNameInput.value)
        clearDiv(document.querySelector('#addProjectDialog'))
        clearDiv(document.querySelector("#projectsList"))
        document.querySelector('.sidebar').appendChild(projectsList(projects))
    })
    dialogContainer.appendChild(newProjectNameInput)
    dialogContainer.appendChild(addButton)
    return dialogContainer

}

function removeAddProjectDialog(){
    const dialogContainer  = document.querySelector('#addProjectDialog')
    while (dialogContainer.lastChild){
        dialogContainer.removeChild(dialogContainer.lastChild)
    }
    dialogContainer.remove()
}


function projectsList (projects){
    const projectsList = document.createElement('div')
    projectsList.id = "projectsList"
    projects.getProjects().forEach((project)=>{
        const projectItemContainer = document.createElement('div')
        projectItemContainer.classList.add('projectItem')
        projectItemContainer.classList.add('navItem')
        projectItemContainer.textContent = project
        projectsList.appendChild(projectItemContainer)
    })
    return projectsList

}

