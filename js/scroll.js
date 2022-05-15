const header = document.querySelector(".header");
const headerText = document.querySelector(".nav_menu-link")
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function (
  entries, 
  sectionOneObserver
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      headerText.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);