const styles = [
    'color: #4dbb63', 
    'background: #999588', 
    'font-size: 20px',
    'text-shadow: 2px 2px #615e57',
    'padding: 5px',
].join(';');
console.log('%cFADILXCODER', styles);


const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();