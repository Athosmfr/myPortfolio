const drop =  document.querySelector(".nav__mobilebtn");
const menu = document.querySelector(".nav__menu");

drop.addEventListener('click', () => {
  if (drop.classList.toggle(".nav__menu")) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
})

