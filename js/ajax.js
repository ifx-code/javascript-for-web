var request = new XMLHttpRequest();
var url = 'https://reqres.in/api/users';
// var url = 'https://www.prevision-meteo.ch/services/json/paris';

request.open("GET", url);
request.send();


request.onreadystatechange = function() {
    readResponse(this);
}


function readResponse(thisObj)
{
    // console.log(thisObj);
    
    /*
    console.log(XMLHttpRequest.UNSENT);             // 0 - l'objet est prêt mais la méthode  open()  n'a pas encore été appelée ;
    console.log(XMLHttpRequest.OPENED);             // 1 - open()  a été appelé ;
    console.log(XMLHttpRequest.HEADERS_RECEIVED);   // 2 - send()  a été appelé, les headers et  status  sont disponibles au sein de l'objet
    console.log(XMLHttpRequest.LOADING);            // 3 - réception en cours, les données reçues sont partielles
    console.log(XMLHttpRequest.DONE);               // 4 - requête terminée.
    
    console.log('==================');
    */
    
    if (thisObj.readyState == XMLHttpRequest.DONE && thisObj.status == 200) {
        var response = JSON.parse(thisObj.responseText);
        // console.log(response);
        // console.log(response.data[1].email);
        // console.log(response.data);
        var elt = document.getElementById('ajx-resp');
        
        var val = randomNumber(5)
        elt.innerHTML = JSON.stringify(response.data[val]);
    }
}

function randomNumber(value)
{
    return Math.floor(Math.random() * value);
}



