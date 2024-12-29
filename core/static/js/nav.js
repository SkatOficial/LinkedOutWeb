//------------EJECUTA FUNCIONES------------
navfixed()
displayDropMenu()
displayMenu()
resetNav()
addArrowsDropMenus()
ClosMenu()

//------------CAMBIA EL NAV A FIXED------------
/* cuando el nav llega a la parte superior de la pantalla se convierte a fixed*/
function navfixed(){
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
}

//------------EVENTO CLICK DROP MENU------------
/* agrega el evento click que permite abrir y cerrar a cada dropmenu */
function displayDropMenu(){
  const dropMenus = document.querySelectorAll(".container-drop-menu")

  dropMenus.forEach(dropMenu => {
    dropMenu.addEventListener("click", function() {
      if(dropMenu.getAttribute('data-dropped') == 'true'){
        dropMenu.setAttribute('data-dropped', 'false');
      }else{
        resetDataActive();
        dropMenu.setAttribute('data-dropped', 'true');
      }
    });
  })
}

//------------EVENTO CLICK DESPLEGAR MENU------------
/* agrega el evento click al boton para desplegar el contenido del navbar*/
function displayMenu(){
  const buttonMenu = document.getElementById("button-menu")


  buttonMenu.addEventListener("click",(event) => {
    const navElement = document.querySelector('.nav ul')
    navElement.classList.toggle("open");
    if(!navElement.classList.contains("open")){
      resetDataActive();
    }

    if(navElement.classList.contains("open")){
      buttonMenu.setAttribute('data-opened', 'true');
    }else{
      buttonMenu.setAttribute('data-opened', 'false');
    }
  })

}

//------------EVENTO CLICK CLOSE MENU------------
/* agrega un evento click para cerrar el menu del nav a cada item del nav*/
function ClosMenu(){
  const itemsnav = document.querySelectorAll(".item-nav")

  itemsnav.forEach(dropMenu => {
    dropMenu.addEventListener("click",(event) => {
      event.stopPropagation();
      const navElement = document.querySelector('.nav ul')
      const buttonMenu = document.getElementById("button-menu")

      navElement.classList.remove("open");
      buttonMenu.setAttribute('data-opened', 'false');
      resetDataActive();
    })
  })
}

//------------REINICIO DE TODOS LOS DATA-ACTIVE ------------
/* cierra todos los dropmenus */
function resetDataActive(){
  const elementsData = document.getElementsByClassName("container-drop-menu");

  for (let i = 0; i < elementsData.length; i++) {
    elementsData[i].setAttribute('data-dropped', 'false');
  }
}

//------------ REINICIO NAV ------------
/* Evalua si la pantalla tiene un minimo de 768px de ancho, 
y reinicia los datos de los dropMenu y el nav */
function resetNav(){
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  function handleResize(event) {
    const navElement = document.getElementById('content-nav')

    if (event.matches) {
      resetDataActive();
      navElement.removeAttribute('class')
    }
  }

  handleResize(mediaQuery);
  mediaQuery.addEventListener("change", handleResize);
}


//------------ Flechas DropMenus ------------
/* agrega las flechas a cada DropMenu*/
function addArrowsDropMenus(){
  const arrowUrl = "/static/img/arrow.svg";

  const containers = document.querySelectorAll('.arrow-container');
  
  fetch(arrowUrl)
      .then(response => {
          return response.text();
      })
      .then(data => {
          containers.forEach(container => {
              container.innerHTML = data;
          });
      })
}
  

