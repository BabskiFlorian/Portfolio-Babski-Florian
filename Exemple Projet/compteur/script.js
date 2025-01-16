const number = document.getElementById('number');

function add_number(){
    let value = +number.textContent;
    number.innerHTML = value + 1;
}

function miness_number(){
    let value = +number.textContent;
    number.innerHTML = value - 1;
}