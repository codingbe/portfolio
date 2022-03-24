const projects = document.querySelector(".projects");
const projectsNav = projects.querySelectorAll(".projects__category");
const grid = projects.querySelector(".grid");

const getProjects = async (type) => {
  const { projects } = await (await fetch("data.json")).json();
  grid.innerHTML = projects
    .map((project) =>
      project.type === type || type === "all" || !type
        ? `
    <div class="card" data-type=${project.type}>
        <div class="card__info">
            <h2 class="card__title">${project.name}</h2>
            <p class="card__description">${project.description}</p>
            <div class="card__icons">
            <a href=${project.page} target="_blank"><i class="fab fa-chrome"></i></a>
            <a href=${project.github} target="_blank"><i class="fab fa-github"></i></a>
            </div>
        </div>
        <img src=${project.img} alt=${project.name} class="card__img" />
    </div>
`
        : null
    )
    .join("");
};

projects.addEventListener("click", (e) => {
  const className = e.target.className;
  if (className === "projects__category") {
    const type = e.target.innerText.toLowerCase();
    getProjects(type);
    projectsNav.forEach((nav) => nav.classList.remove("selected"));
    e.target.classList.add("selected");
  }
});

getProjects();
