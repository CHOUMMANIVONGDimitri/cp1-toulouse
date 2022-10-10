// 1st task
const avatar = document.getElementById("avatarImg");
avatar.addEventListener("click", () => {
  avatar.src = "./image/logo-wcs.png";
});
// 2nd task & 3rd task

const spanTitle = document.getElementById("name");
const colorBg = document.querySelector(".pink-bg");
const buttonModifText = document.getElementById("btn-changeText");
buttonModifText.addEventListener("click", () => {
  colorBg.style.backgroundColor = `${prompt("entre une couleur")}`;
  spanTitle.innerText = prompt("change les valeur");
  spanTitle.style.color = "white";
});
