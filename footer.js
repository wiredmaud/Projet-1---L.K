const clickArrowFooter = document.querySelector('#arrow');
const footerToggle = document.querySelector('#moveFooter');
/*All clear with console*/

clickArrowFooter.addEventListener('click', function (event) {
    event.preventDefault();
    if (footerToggle.classList.contains('footerDown'))
    {
        footerToggle.classList.remove('footerDown');
        footerToggle.classList.add('footerUp');
        clickArrowFooter.classList.remove('arrowRotateUp');
        clickArrowFooter.classList.add('arrowRotateDown');
    }
    else if (footerToggle.classList.contains('footerUp'))
    {
        footerToggle.classList.remove('footerUp');
        footerToggle.classList.add('footerDown');
        clickArrowFooter.classList.remove('arrowRotateDown');
        clickArrowFooter.classList.add('arrowRotateUp');
    }
});