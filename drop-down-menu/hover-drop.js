const hoverButton = document.getElementById('hover-button')
const hoverMenu = document.getElementById('hover-menu')

export function hoverDropDown() {
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
}