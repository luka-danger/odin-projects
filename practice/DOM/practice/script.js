// event is listed as deprecated by VS Code
// To fix, open JSON settings and add the following line: 
// "typescript.validate.enable": false 
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
}); 

const hello = document.getElementById("hello");
let hTags = document.getElementsByTagName('h2');
const coding = document.getElementById("coding");
let language = document.getElementsByClassName("language"); 

let newArray = Array.from(language)
console.log(newArray)

// Select first element in document 
let firstElement = document.querySelector('*'); 
// Select all elements in document 
let allElements = document.querySelectorAll('*');

// Put all elements in allElements into an Array
let bigArray = Array.from(allElements); 

// Child combinator finds all elements direct children of element 
let listItems = document.querySelectorAll('ul > li');
let listArray = Array.from(listItems); 

let button = document.querySelector('#button');

// addEventListener calls the function for specific element
button.addEventListener('click', function() {
    alert("Wow, you clicked it anyway!"); 
    console.log('what a rebel.'); 
}); 

let button2 = document.querySelector('#button2');

// onclick logs the event and then calls the function 
button2.onclick = function() {
    alert("See, nothing happened.")
    console.log(this.id); 
}

let button3 = document.querySelector("#button3");

let showAlert = function() {
    alert("I told you not to click it!")
}; 

button3.addEventListener('click', showAlert);
button3.removeEventListener('click', showAlert);

window.addEventListener('scroll',(event) => {
    console.log('They see me scrollin...');
});

window.addEventListener('keydown',(event) => {
    console.log('They hatin...');
});

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'yellow';
});

password.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
});

let menu = document.querySelector('#menu');
menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home': 
            console.log('Home menu item was clicked');
            break;
        case 'dashboard': 
            console.log('Dashboard menu item was clicked');
            break;
        case 'report': 
            console.log('Report menu item was clicked');
            break;
    }
});

let nuggets = document.querySelector('#nuggets');
nuggets.addEventListener('click', (event) => {
    alert("Let's Go Nuggets!");
    console.log('dun, dun, dun dun dun');
});

nuggets.addEventListener('click', () => {
    const changeColor = 
    nuggets.style.background = 'maroon'
}); 

function highlight(elem, callback) {
    const newColor = 'yellow';
    elem.style.background = newColor;

    if(callback && typeof callback === 'function') {
        callback(elem);
    }
};

let note = document.querySelector('.note');
function addBorder(elem) {
    elem.style.border = 'solid 1px red';
}; 

highlight(note, addBorder); 

function callback(mutations) {
    
}
