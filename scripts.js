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