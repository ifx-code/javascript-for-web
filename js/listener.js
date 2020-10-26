/* ====================================================================== */

var anchorClick = document.getElementById('anchor-click');
anchorClick.addEventListener('click', function(e) {
    anchorClickFunction(e);
});


var parentClick = document.getElementsByClassName('content-parent');
parentClick = parentClick[0];
parentClick.addEventListener('click', function(e) {
    parentClickFunction(e);
});


var childClick = document.getElementsByClassName('content-child');
childClick = childClick[0];
childClick.addEventListener('click', function(e) {
    childClickFunction(e);
});


/*
    Functions
*/

function anchorClickFunction(event) {
    event.preventDefault();
    alert('dev...');
}

function parentClickFunction(event) {
    event.preventDefault();
    alert('Parent..');
}

function childClickFunction(event) {
    event.preventDefault();
    event.stopPropagation();
    alert('Child..');
}