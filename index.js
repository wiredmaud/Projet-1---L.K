const clickLouise = document.querySelector('#buttonLouise');
const clickKarine = document.querySelector('#buttonKarine');

const displayLouise = document.querySelector('.displayLouiseNone');
const displayKarine = document.querySelector('.displayKarineNone');
const paragraphPresentation = document.querySelector('.presentation');
/*All CLEAR with console!*/
console.log(paragraphPresentation);

clickLouise.addEventListener("click", function (event) {
    event.preventDefault();
    displayLouise.classList.toggle("displayLouiseFlex");
    paragraphPresentation.classList.toggle("presentationDisplayNone");
});

clickKarine.addEventListener("click", function (event) {
    event.preventDefault();
    displayKarine.classList.toggle('displayKarineFlex');
    paragraphPresentation.classList.toggle("presentationDisplayNone");
});