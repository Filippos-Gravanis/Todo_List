export function sidebar () {
    const sidebarContainer = document.createElement('div')
    sidebarContainer.classList.add('sidebar')
    console.log(sidebarContainer);
    const projectsHeader = document.createElement('div') 
    projectsHeader.id = 'projectsHeader'
    const projectsTag = document.createElement('p')
    projectsTag.textContent = "Projects"
    const projectsHeaderBtn = document.createElement('button')
    projectsHeaderBtn.textContent = "+ New"
    projectsHeaderBtn.id = 'projectsHeaderBtn'
    projectsHeaderBtn.addEventListener('click',)
    projectsTag.classList.add('projectsTag')
    projectsHeader.appendChild(projectsTag)
    projectsHeader.appendChild(projectsHeaderBtn)
    sidebarContainer.appendChild(createNavItem("All"))
    sidebarContainer.appendChild(createNavItem("Today"))
    sidebarContainer.appendChild(createNavItem("This Week"))
    sidebarContainer.appendChild(projectsHeader)
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
