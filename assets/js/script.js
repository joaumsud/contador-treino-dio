let count = 0;

const number_current = document.getElementById('number');

function increment(){
    count++;
    number_current.innerHTML = count;
}

function decrement(){
    count--;
    number_current.innerHTML = count;
}