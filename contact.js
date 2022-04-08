const contact = document.querySelector(".contact");
const copyright = contact.querySelector(".contact__copy");

const copyToClipboard = (text) => {
  const area = document.createElement("textarea");
  document.body.appendChild(area);
  area.value = text;
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
};

const copy = (text) => {
  copyToClipboard(text);
  alert("복사 완료!");
};

copyright.innerText = `Copyright ${new Date().getFullYear()}. codingbe all rights reserved.`;

contact.addEventListener("click", (e) => {
  const className = e.target.className;

  if (className === "contact__email") {
    copy(e.target.innerText);
  }
});
