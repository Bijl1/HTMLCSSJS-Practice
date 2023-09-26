// Generates a random color in hexadecimal (e.g., #62b9cc)
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  // Changes the color of the background using STYLE
  function changeBackgroundColor() {
    const colorBg = document.getElementById("color-overlay");
    colorBg.style.backgroundColor = generateRandomColor();
  }
  
  function changeBackgroundText() {
    const textBg = document.getElementById("text-bg");
    const currentText = textBg.innerHTML;
  
    if (currentText === "BORN TO FISH") {
      textBg.innerHTML = "OR";
    } else if (currentText === "OR") {
      textBg.innerHTML = "FORCED TO WORK";
    } else if (currentText === "FORCED TO WORK") {
      textBg.innerHTML = "BORN TO FISH";
    }
  }
  
  function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
  }
  
  setInterval(changeBackground, 100);


let graph = document.getElementById('paragraph');
console.log(graph); // <== <p id="paragraph">What is your name?</p>

let links = document.getElementsByClassName('link');
console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link

let gameFish = document.getElementById('title');
console.log(gameFish);

let code = document.getElementsByClassName('item')
console.log(code)

let divs = document.getElementsByTagName('div');
console.log(divs);

let paragraphDoc = document.getElementById('paragraph');
let paragraphId = paragraphDoc.getAttribute('id');
console.log(paragraphId); // <== paragraph

let paragraphTwo = document.getElementById('paragraph');
paragraphValue.setAttribute('id', 'info-paragraph');
console.log(paragraphTwo)
//<p id="info-paragraph">What is your name?</p>


//Set the href attribute of the a element identified as google-link to http://www.google.com.
//Practice 1
const googleLink = document.getElementById('google-link');
googleLink.setAttribute('href', 'http://www.google.com');


let paragraph2 = document.getElementById('paragraph');
paragraph2.removeAttribute('id');
paragraph2.setAttribute('class', 'paragraph');
console.log(paragraph2);


let h2Tag = document.createElement('h2');
console.log(h2Tag); //<h2></h2>
h2Tag.innerHTML = 'Elephant';
console.log(h2Tag);//<h2>Elephant</h2>

let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);
console.log(parent);


let text = document.createTextNode('This text is created dynamically  ');
parent.appendChild(text);
console.log(text);

//Practice 4
let element = document.createElement('p');
console.log(element); //<p></p>

let textNode = document.createTextNode('Hi there! I am using JavaScrip  ');
parent.appendChild(textNode);
console.log(textNode);