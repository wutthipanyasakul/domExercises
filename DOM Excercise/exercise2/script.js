
//When a user click + , the number increase , vice versa.

const nextClick =document.getElementById('next');
const previousClick = document.getElementById('prev');

let counter = 0;

nextClick.addEventListener('click', function() {
    counter += 1;
    document.querySelector('h1').innerHTML = counter;
});

previousClick.addEventListener('click', function() {
    counter -= 1;
    document.querySelector('h1').innerHTML = counter;
});
