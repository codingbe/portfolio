const skillSection = document.querySelector(".skills");
const skillsUl = skillSection.querySelector(".skills__lists");

const getSkills = async () => {
  const { skills } = await (await fetch("data.json")).json();
  skillsUl.innerHTML = skills
    .map(
      (skill) => `
        <li class="skills__list">
            <div class="list__column">
                <h4 class="list__title">${skill.name}</h4>
                <span class="list__percent">${skill.percent}</span>
            </div>
            <div class="list__bar">
                <div class="bar__status" style="width: ${skill.percent}"></div>
            </div>
        </li>`
    )
    .join("");
};

getSkills();
