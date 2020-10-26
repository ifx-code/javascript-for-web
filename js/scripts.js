const myAnchor = document.getElementById('my-anchor');
/*
    myAnchor => <p id="my-anchor">My content</p>
    myAnchor.textContent => My content
    myAnchor.innerHTML => My content
*/

const contents = document.getElementsByClassName('content');
const firstContent = contents[0];
/*
    firstContent => <div class="content">Contenu 1</div>
*/

const articles = document.getElementsByTagName('article');
const thirdArticle = articles[2];
/*
    thirdArticle => <article>Contenu 3</article>
*/

const elt = document.querySelector("#myId p.article > a");
/*
    elt => <a href="#">Lien 6</a>
*/

const eltAll = document.querySelectorAll("#myId p.article > a");
const secondElt = eltAll[1];
/*
    secondElt => <a href="#">Lien 12</a>
*/

const element = document.getElementById('main');
/*
    element.children                => HTMLCollection of 'p'
    element.parentElement           => <div id="parent">........</div>
    element.nextElementSibling      => <div id="next">Suivant</div>
    element.previousElementSibling  => <div id="previous">Précédent</div>
*/

var elem = document.getElementById('modify-by-js');

var htmlData = elem.querySelector('.html-data');
htmlData.innerHTML = '<small>updated text</small>';
var contentData = elem.querySelector('.content-data');
contentData.textContent = 'Text is being modified...';


const eltClassList = document.getElementById('class-list');

// Add class
eltClassList.classList.add("class-list-2");

// Remove Class
eltClassList.classList.remove("class-list-1");

// verify if element contains class
if (eltClassList.classList.contains("class-list-2")) {
    //console.log('class found')
}

// Replace class
eltClassList.classList.replace("cl-contain" , "cl-contain-2");


// Return HTML Collection
var body = document.getElementsByTagName("body");

// Return HTML string
var body = document.querySelector("body");
body.style.backgroundColor = 'cyan';

// Return HTML String
var myFormElem = document.getElementById('my-form');

var input = myFormElem.getElementsByTagName('input');
input = input[0]; // Convert to String

input.setAttribute("type", "password");         // Change le type de l'input en un type password
input.setAttribute("name", "my-password");      // Change le nom de l'input en my-password
//console.log(input.getAttribute("name"));        // Retourne my-password

const newElement = document.createElement('span');

// Append HTML
myFormElem.appendChild(newElement);

// Remove HTML
myFormElem.removeChild(newElement); 

// Remove HTML
// myFormElem.replaceChild(document.createElement("article"), newElement); 