//------------CAMBIA EL NAV A FIXED------------
const navbar = document.getElementById('nav');
const placeholder = document.createElement('div');

placeholder.className = 'placeholder';
nav.parentNode.insertBefore(placeholder, nav);

const navHeight = nav.offsetHeight;
const navOffsetTop = nav.offsetTop - 20; //se restan los margin o padding que hagan funcionar mal el efecto

window.addEventListener('scroll', () => {
  if (window.scrollY >= navOffsetTop) {
    nav.setAttribute('data-fixed', 'true');

    placeholder.style.height = `${navHeight}px`;
    placeholder.style.display = 'block';
    
  } else {
    nav.removeAttribute('data-fixed'); 
    placeholder.style.display = 'none';
  }});

//------------EVENTO CLICK DROP MENU------------
document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const parentElement = clickedElement.parentElement;

  if(clickedElement.classList.contains("title-drop-menu")){
    if(parentElement.getAttribute('data-active') == 'true'){
      parentElement.setAttribute('data-active', 'false');
    }else{
      resetDataActive();
      parentElement.setAttribute('data-active', 'true');
    }
  }
});
//------------EVENTO CLICK DESPLEGAR MENU------------
const buttonMenu = document.getElementById("button-menu")

buttonMenu.addEventListener("click",(event) => {
  const navElement = document.querySelector('.nav ul')
  navElement.classList.toggle("open");
})
//------------REINICIO DE DATA-ACTIVE ------------
function resetDataActive(){
  const elementsData = document.getElementsByClassName("container-drop-menu");

  for (let i = 0; i < elementsData.length; i++) {
    elementsData[i].setAttribute('data-active', 'false');
  }
}

//------------ REINICIO NAV ------------
const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleResize(event) {
  const navElement = document.querySelector('.nav ul')

  if (event.matches) {
    resetDataActive();
    navElement.removeAttribute('style')
  }
}

handleResize(mediaQuery);
mediaQuery.addEventListener("change", handleResize);