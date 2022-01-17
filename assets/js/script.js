let count = 0;
const counter_number = document.getElementById("number");

function increment() {
    if (count >= 10) {
        count += 10;
        counter_number.innerHTML = count;
    } else {
        count++;
        counter_number.innerHTML = count;
        counter_number.style.color = "white";
        if(count < 0){
            counter_number.style.color = "red"; 
        }
    }
}

function decrement() {
    if (count <= (-10)) {
        count -= 10;
        counter_number.innerHTML = count;

    } else {
        count--;
        counter_number.innerHTML = count;
        if (count < 0) {
            counter_number.style.color = "red";
        }
    }

}
function zerar() {
    count = 0;
    counter_number.innerHTML = count;
    counter_number.style.color = "white";
}
