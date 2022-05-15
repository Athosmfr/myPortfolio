// HTML
const openHtml = document.getElementById('open-html');
const modal_containerHtml = document.getElementById('modal-container-hmtl');
const closeHtml = document.getElementById('close-hmtl');
// CSS
const openCss = document.getElementById('open-css');
const modal_containerCss = document.getElementById('modal-container-css');
const closeCss = document.getElementById('close-css');
// JS Front
const openJs = document.getElementById('open-js');
const modal_containerJs = document.getElementById('modal-container-js');
const closeJs = document.getElementById('close-js');
// Angular
const openAng = document.getElementById('open-ang');
const modal_containerAng = document.getElementById('modal-container-ang');
const closeAng = document.getElementById('close-ang');
// Python
const openPy = document.getElementById('open-py');
const modal_containerPy = document.getElementById('modal-container-py');
const closePy = document.getElementById('close-py');
// JS Back
const openJsBack = document.getElementById('open-jsback');
const modal_containerJsBack = document.getElementById('modal-container-jsback');
const closeJsBack = document.getElementById('close-jsback');
// SQL
const openSql = document.getElementById('open-sql');
const modal_containerSql = document.getElementById('modal-container-sql');
const closeSql = document.getElementById('close-sql');





// HTML
openHtml.addEventListener('click', () => {
  modal_containerHtml.classList.add('show');
});

closeHtml.addEventListener('click', () => {
  modal_containerHtml.classList.remove('show');
});

// CSS
openCss.addEventListener('click', () => {
  modal_containerCss.classList.add('show');
});

closeCss.addEventListener('click', () => {
  modal_containerCss.classList.remove('show');
});

// JS Front
openJs.addEventListener('click', () => {
  modal_containerJs.classList.add('show');
});

closeJs.addEventListener('click', () => {
  modal_containerJs.classList.remove('show');
});

// Angular
openAng.addEventListener('click', () => {
  modal_containerAng.classList.add('show');
});

closeAng.addEventListener('click', () => {
  modal_containerAng.classList.remove('show');
});

// Python
openPy.addEventListener('click', () => {
  modal_containerPy.classList.add('show');
});

closePy.addEventListener('click', () => {
  modal_containerPy.classList.remove('show');
});

// JS Back
openJsBack.addEventListener('click', () => {
  modal_containerJsBack.classList.add('show');
});

closeJsBack.addEventListener('click', () => {
  modal_containerJsBack.classList.remove('show');
});

// SQL
openSql.addEventListener('click', () => {
  modal_containerSql.classList.add('show');
});

closeSql.addEventListener('click', () => {
  modal_containerSql.classList.remove('show');
});