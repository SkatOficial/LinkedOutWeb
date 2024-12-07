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