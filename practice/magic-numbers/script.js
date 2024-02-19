function reverseMe(e) {
    const reverse = document.querySelector('.container');
    reverse.classList.toggle('reverse');
}

function changeFontColor(e) {
    const color = document.querySelectorAll('.numbers');
    color.forEach(color => {
        const changeFontColor = randomColor();
        color.style.color = changeFontColor;
    });
}

function randomColor() {
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function changeCardColor(e) {
    const color = document.querySelectorAll('.numbers');
    color.forEach(color => {
        const changeCardColor = randomColor();
        color.style.background = changeCardColor;
    });
}

function backToNormal(e) {
    const normal = document.querySelectorAll('.numbers');
    normal.forEach(normal => {
        normal.classList.toggle('normal');
    });
}


