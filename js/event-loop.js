var timeOut;
var intVal;

timeOut = setTimeout(callbackFunction, 5000);   // 'callbackFunction' will trigger after 5000 millisecondes - only 1 time [ASYNC]
intVal = setInterval(callbackResponse, 3000);   // 'callbackFunction' will trigger after 3000 millisecondes - multiple time [ASYNC] ~ will run after 3 seconds, 6 seconds, 9 seconds, ....

console.log('Code word ?');

stopCallbackFunction();                 // Cancel 'timeOut' before being executed
setTimeout(stopCallbackResponse, 5000); // intVal will run only 1 time (3 secs), then is cancelled


/*
    ======= FUNCTION =======
*/

function callbackFunction()
{
    console.log('DEV responding....')
}

function callbackResponse()
{
    console.log('1 2 3 ....');
}

function stopCallbackFunction()
{
    clearTimeout(timeOut);      // Cancel the [ASYNC] / setTimeout when calling this function
}

function stopCallbackResponse()
{
    clearInterval(intVal);      // Cancel the [ASYNC] / setInterval when calling this function
}



/*
    ======= await / async & Promise =======
*/

async function getNumber1() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout( function() {
            resolve({
                message: 10,
                code: "statusCode"
            });
        }, 5000);
    });
    
    console.log(promise);
    
    return promise;
}

async function getNumber2() {
    return 4;
}

async function compute() {
    const value1 = await getNumber1();
    const value2 = await getNumber2();
    
    console.log(value1);
    
    return value1.message + value2;
}

compute()
.then(function(data) {
    var elt = document.getElementById('result');
    elt.innerHTML = data;
})




