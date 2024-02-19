function reverseMe(e) {
    const reverse = document.querySelector('.container');
    reverse.classList.toggle('reverse');
}

function changeColor(e) {
    const color = document.querySelectorAll('.numbers');
    color.forEach(color => {
        const changeColor = randomColor();
        color.style.color = changeColor;
    });
}

function randomColor() {
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}


