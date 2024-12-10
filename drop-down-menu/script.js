const dropDownButton = document.getElementById('dropdown-button')
const hoverButton = document.getElementById('hover-button')
const menu = document.getElementById('menu')
const hoverMenu = document.getElementById('hover-menu')
const displayItems = document.querySelectorAll('.item')

dropDownButton.addEventListener('click', () => {
    if (menu.style.display == "block") {
        menu.style.display = "none"
    }
    else {
        menu.style.display = "block"
    }
})

hoverButton.addEventListener('mouseover', () => {
    if (hoverMenu.style.display == "block") {
        hoverMenu.style.display = "none"
    }
    else {
        hoverMenu.style.display = "block"
    }
})


hoverMenu.addEventListener('mouseleave', () => {
    hoverMenu.style.display = "none"
})

menu.addEventListener('mouseleave', () => {
    menu.style.display = "none"
})

document.addEventListener('DOMContentLoaded', () => {
    menu.style.display = "none"
    hoverMenu.style.display = "none"
})