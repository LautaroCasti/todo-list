// const todoBtn = document.querySelector("#todo-btn");


// TODO: Add a function to display the project that is selected, don't know if this is going to call a 
// for each to each of the todos in that project or something different who knows
export function displayProjects(projects) {
    const projectsContainer = document.querySelector("#projects__container");
    console.log(projectsContainer);
    projectsContainer.textContent = "";
    if (!projects) {
        console.log("Estoy vacio");
    }
    projects.forEach(project => {
        const projectDiv = createProject(project);
        projectsContainer.appendChild(projectDiv);
    })
};

export function clickProjects() {
    const projectsDivs = document.querySelectorAll("#projects__container div");
    projectsDivs.forEach(project => (
        project.addEventListener("click", () => {
            console.log("me clickearon y funciono aunque no me importen");
        })
    ))
}


// TODO: Add a function to display a todo, and the requesite is to make it abstract of the particular project. 
// It just need to display a todo with all his attributes. Change this?


function createProject(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.setAttribute("data-project-id", project.id);

    projectDiv.textContent = project.title;

    return projectDiv;
}


