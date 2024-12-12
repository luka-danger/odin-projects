const dropDownButton = document.getElementById('dropdown-button')
const menu = document.getElementById('menu')

export function clickDropDown() {
    dropDownButton.addEventListener('click', () => {
        if (menu.style.display == "block") {
            menu.style.display = "none"
        }
        else {
            menu.style.display = "block"
        }
    })
    
    menu.addEventListener('mouseleave', () => {
        menu.style.display = "none"
    })
}