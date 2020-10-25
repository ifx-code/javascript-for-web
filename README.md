# JS

### document.getElementById()

`<p id="my-anchor">My content</p`

`const myAnchor = document.getElementById('my-anchor');`

### document.getElementsByClassName()

`<div>`
    `<div class="content">Contenu 1</div>`
    `<div class="content">Contenu 2</div>`
    `<div class="content">Contenu 3</div>`
`</div>`

`const contents = document.getElementsByClassName('content');`
`const firstContent = contents[0];`

### document.getElementsByTagName()

`<div>`
    `<article>Contenu 1</article>`
    `<article>Contenu 2</article>`
    `<article>Contenu 3</article>`
`</div>`

`const articles = document.getElementsByTagName('article');`
`const thirdArticle = articles[2];`

### document.querySelector("#myId p.article > a")

**prend en paramètre le sélecteur et vous retournera le premier élément trouvé, ou  `null`  si aucun élément n'a été trouvé.**


### document.querySelector("#myId p.article > a")

**Pour retourner une liste de résultats qui correspondent à la recherche que vous souhaitez**