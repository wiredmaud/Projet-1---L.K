let cardOne = document.getElementById("card-one");
let cardTwo = document.getElementById("card-two");
let cardThree = document.getElementById("card-three");
let btnOne = document.getElementById("btn_one");
let btnTwo = document.getElementById("btn_two");
let btnThree = document.getElementById("btn_three");


function flip(elem) {
    if (elem.id == "btn_one") {
        cardOne.classList.add("flipcard");
        btnOne.style.display = 'none';
    } else if (elem.id == "btn_two") {
        cardTwo.classList.add("flipcard");
        btnTwo.style.display = 'none';
    } else {
        cardThree.classList.add("flipcard");
        btnThree.style.display = 'none';
    };
};


function closeBtn(elem) {
    if (elem.id == "btn-close_one") {
        cardOne.classList.remove("flipcard");
        btnOne.style.display = 'block';
        btnOne.style.transitionDelay = '2s';
    } else if (elem.id == "btn-close_two") {
        cardTwo.classList.remove("flipcard");
        btnTwo.style.display = 'block';
    } else {
        cardThree.classList.remove("flipcard");
        btnThree.style.display = 'block';
    };
}

