//Receive an input and print Hello the inputted name
const buttonClick= document.getElementById('button');


buttonClick.addEventListener('click', function() {
    const name = document.getElementById('input').value;
    document.querySelector('h1').innerHTML = `Hello, ${name}`;
});


