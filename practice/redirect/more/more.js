

document.getElementById('submit').addEventListener('click', redirect);

function redirect() {
    inputName = document.getElementById('username').value
    nameLength = inputName.length
    if (nameLength < 4) {
        window.location.href = 'https://youtu.be/xrg-RgF5F8o?si=wxxaN-wMoOZ_hnI9&t=7'
    }
    else {
        document.getElementById('warning').innerText = `"${inputName}" is ${nameLength} characters long.\
        Way to follow instructions.`
    }
}


