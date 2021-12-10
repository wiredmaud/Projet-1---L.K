const clickLouise = document.querySelector("#buttonLouise");
const clickKarine = document.querySelector("#buttonKarine");

const displayLouise = document.querySelector("#queryLouise");
const displayKarine = document.querySelector("#queryKarine");

var viewport = window.innerWidth;

const cardLouise = document.querySelector("#cardLouise");
const cardKarine = document.querySelector("#cardKarine");

if (viewport < 480) {
  clickLouise.addEventListener("click", function (event) {
    event.preventDefault();
    if (displayLouise.classList.contains("heroPresentationNone")) {
      displayLouise.classList.remove("heroPresentationNone");
      displayLouise.classList.add("heroPresentationFlex");
    } else if (displayLouise.classList.contains("heroPresentationFlex")) {
      displayLouise.classList.remove("heroPresentationFlex");
      displayLouise.classList.add("heroPresentationNone");
    }
    if (displayKarine.classList.contains("heroPresentationFlex")) {
      displayKarine.classList.remove("heroPresentationFlex");
      displayKarine.classList.add("heroPresentationNone");
    }
  });

  clickKarine.addEventListener("click", function (event) {
    event.preventDefault();
    if (displayKarine.classList.contains("heroPresentationNone")) {
      displayKarine.classList.remove("heroPresentationNone");
      displayKarine.classList.add("heroPresentationFlex");
    } else if (displayKarine.classList.contains("heroPresentationFlex")) {
      displayKarine.classList.remove("heroPresentationFlex");
      displayKarine.classList.add("heroPresentationNone");
    }
    if (displayLouise.classList.contains("heroPresentationFlex")) {
      displayLouise.classList.remove("heroPresentationFlex");
      displayLouise.classList.add("heroPresentationNone");
    }
  });
}

if (viewport >= 480) {
  cardLouise.addEventListener("mouseover", function (event) {
    event.preventDefault();
    displayLouise.classList.remove("heroPresentationNone");
    displayLouise.classList.add("heroPresentationFlex");
  });

  cardLouise.addEventListener("mouseleave", function (event) {
    event.preventDefault();
    displayLouise.classList.remove("heroPresentationFlex");
    displayLouise.classList.add("heroPresentationNone");
  });

  cardKarine.addEventListener("mouseover", function (event) {
    event.preventDefault();
    displayKarine.classList.remove("heroPresentationNone");
    displayKarine.classList.add("heroPresentationFlex");
  });

  cardKarine.addEventListener("mouseleave", function (event) {
    event.preventDefault();
    displayKarine.classList.remove("heroPresentationFlex");
    displayKarine.classList.add("heroPresentationNone");
  });
}
