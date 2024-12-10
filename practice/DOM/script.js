const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This says things!';

container.appendChild(content);

const paragraph = document.createElement('p'); 
paragraph.style.color = "red"; 
paragraph.textContent = "Hey, I'm red!";

container.appendChild(paragraph)

const headerThree = document.createElement('h3');
headerThree.style.color = "blue";
headerThree.textContent = "Cool, I'm a blue h3!";

container.appendChild(headerThree); 

const newDiv = document.createElement('div');
newDiv.style.cssText = 'background: pink; border: thick solid #000000'; 

container.appendChild(newDiv); 

const newHeader = document.createElement('h1');
newHeader.textContent = "Wow, I'm in a div!"

newDiv.appendChild(newHeader);

const newParagraph = document.createElement('p');
newParagraph.textContent = "Hey, ME TOO!"; 

newDiv.appendChild(newParagraph);

container.appendChild(newDiv);

function alertFunction() {
    alert("YAY! YOU DID IT!");
} 

button1.addEventListener('click', alertFunction);

button2.addEventListener('click', function (e) {
    console.log(e.target);
});

button3.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

button4.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = '#' + randomColor; 
}); 