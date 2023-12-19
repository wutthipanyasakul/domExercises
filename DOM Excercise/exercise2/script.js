
//When a user click + , the number increase , vice versa.

let counter = 0;

document.getElementById('next').addEventListener('click', function() {
    counter += 1;
    document.querySelector('h1').innerHTML = counter;
});

document.getElementById('prev').addEventListener('click', function() {
    counter -= 1;
    document.querySelector('h1').innerHTML = counter;
});
