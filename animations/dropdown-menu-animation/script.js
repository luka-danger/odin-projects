const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

let visibleMenu = false;

dropdownMenu.addEventListener('animationend', (e) => {
  if (e.animationName === 'scroll-up') {
    dropdownMenu.style.visibility = 'hidden';  
    dropdownMenu.classList.remove('scroll-up');
  }
});

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    if (visibleMenu) {
      dropdownMenu.classList.remove('scroll-down')
      dropdownMenu.classList.add('scroll-up')
      visibleMenu = false;
    }
    else {
      dropdownMenu.style.visibility = 'visible'; 
      dropdownMenu.classList.add("scroll-down");
      dropdownMenu.classList.remove("scroll-up")
      visibleMenu = true;
    }
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target) && visibleMenu) {
    dropdownMenu.classList.add('scroll-up');
    dropdownMenu.classList.remove('scroll-down'); 
    visibleMenu = false;
  }
})