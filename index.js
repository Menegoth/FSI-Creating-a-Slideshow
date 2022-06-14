const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

//variables
const currentImage = document.querySelector(".image");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const bubbleButtons = document.querySelectorAll(".bubble");
const slideshowDiv = document.querySelector(".slideshow");
const buttonsDiv = document.querySelector(".controls");

//update page
currentImage.src = images[0];
let currentSelected = 0;
updateButtons(bubbleButtons, currentSelected);
nextButton.style.visibility = "hidden";
previousButton.style.visibility = "hidden";
buttonsDiv.style.visibility = "hidden";
autoProgress();

//next button functionality
nextButton.addEventListener("click", function() {
    if (currentSelected != 5) {
        currentImage.src = images[++currentSelected];
        updateButtons(bubbleButtons, currentSelected);
    }
})

//previous button functionality
previousButton.addEventListener("click", function() {
    if (currentSelected != 0) {
        currentImage.src = images[--currentSelected];
        updateButtons(bubbleButtons, currentSelected);
    }
})

//bubble button functionality
for (let x = 0; x < bubbleButtons.length; x++) {
    bubbleButtons[x].addEventListener("click", function() {
        currentSelected = x;
        currentImage.src = images[x];
        updateButtons(bubbleButtons, currentSelected);
    })
}

//function to update color of bubblebuttons ● ○
function updateButtons(buttonsArray, selectedImage) {
    for (let x = 0; x < buttonsArray.length; x++) {
        if (x === selectedImage) {
            buttonsArray[x].textContent = "●";
        } else {
            buttonsArray[x].textContent = "○";
        }
    }
}

//hover visibility
slideshowDiv.addEventListener("mouseover", function() {
    nextButton.style.visibility = "visible";
    previousButton.style.visibility = "visible";
    buttonsDiv.style.visibility = "visible";
    clearInterval(autoslide);
})

slideshowDiv.addEventListener("mouseout", function() {
    nextButton.style.visibility = "hidden";
    previousButton.style.visibility = "hidden";
    buttonsDiv.style.visibility = "hidden";
    autoProgress();
})

//auto progress
function autoProgress() {
    autoslide = setInterval(function() {
        if (currentSelected != 5) {
            currentImage.src = images[++currentSelected];
        } else {
            currentSelected = 0;
            currentImage.src = images[0];
        }
        updateButtons(bubbleButtons, currentSelected);
    }, 2000);
}