document.getElementById('contact-button').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";

});

document.querySelector('.close-form').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";

});

document.getElementById('submit-button').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "none";
    document.querySelector('.bg-modal2').style.display = "flex";
    
});


document.querySelector('.close-form2').addEventListener("click", function() {
    document.querySelector('.bg-modal2').style.display = "none";

});
