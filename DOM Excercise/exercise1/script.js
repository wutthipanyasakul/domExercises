//Receive an input and print Hello the inputted name
document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('input').value;
    document.querySelector('h1').innerHTML = `Hello, ${name}`;
});

