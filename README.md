# DEMO

- https://open-classrooms-courses.github.io/javascript-for-web/index.html
- https://open-classrooms-courses.github.io/javascript-for-web/listener.html
- https://open-classrooms-courses.github.io/javascript-for-web/ajax.html
- https://open-classrooms-courses.github.io/javascript-for-web/webpack.html

# Resources

- https://developer.mozilla.org/fr/docs/Web/Events (JS Events)
- https://reqres.in/api/users (API)
- https://www.npmjs.com/ (npm packages)

# TO KNOW

- Linter : Clean Code / Less errors in codes
- Minifier : Compact & light code
- Transpiler : code with latest JS which is compatible (Babel)
- Bundler : packing the code into 1 file (Webpack)

# Table of content

### document.getElementById()


### document.getElementsByClassName()


### document.getElementsByTagName()


### document.querySelector("#myId p.article > a")

**prend en paramètre le sélecteur et vous retournera le premier élément trouvé, ou  `null`  si aucun élément n'a été trouvé.**


### document.querySelectorAll("#myId p.article")

**Pour retourner une liste de résultats qui correspondent à la recherche que vous souhaitez**


### addEventListener ( event.stopPropagation() / event.preventDefault() )

### Web Service (Codes HTTP / Methodes HTTP)

- `100 - 199` : code information + peu utiliser
- `200 - 299` : success + envoyer information / response
- `300 - 399` : redirection + contenu bouger + pas accessible directement
- `400 - 499` : code erreur liés à l'utilisation du service web (Client Web)
- `500 - 599` : Code erreur venant du service web (Web Service / Server)
 
- `GET` : select data
- `POST` : insert data
- `PUT` : update data
- `DELETE` : delete data

### Await / Async

### npm

- `npm init` : create package.json file
- `npm install <module_name> --save-dev` : dependence de developement
- `npm install <module_name> --save` : dependence de production
- `npm install` : install dependencies of the app when cloning it.

### Webpack

- `npm init`
- `npm install webpack webpack-cli --save-dev`
- Add `<script src="./dist/app.bundle.js"></script>` in your HTML / PHP files, this will be the compile JS
- Write your JS codes in `src/js`
- Add `"build": "webpack"` to *package.json*
- Run : `npm run build`

### Babel

- `npm install --save-dev babel-loader @babel/core @babel/preset-env babel-polyfill`