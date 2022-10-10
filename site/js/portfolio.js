// 1st task
const avatar = document.getElementById("avatarImg");
avatar.addEventListener("click", () => {
  avatar.src = "./image/logo-wcs.png";
});
// 2nd task & 3rd task & 4th task

const spanTitle = document.getElementById("name");
const colorBg = document.querySelector(".pink-bg");
const buttonModifText = document.getElementById("btn-changeText");
const pColor = document.querySelector(".pink-text");
buttonModifText.addEventListener("click", () => {
  let colorValue = `${prompt("entre une couleur")}`;
  colorBg.style.backgroundColor = colorValue;
  pColor.style.color = colorValue;
  spanTitle.innerText = prompt("change les valeur");
  spanTitle.style.color = "white";
});
