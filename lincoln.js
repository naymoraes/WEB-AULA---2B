document.addEventListener("DOMContentLoaded", function () {
    const animateButton = document.getElementById("animateButton");
    const images = document.querySelectorAll(".animated-image");

    animateButton.addEventListener("click", function () {
        images.forEach(image => image.classList.toggle("animate"));
    });
});


function changeColor() {
    var elements = document.querySelectorAll('.change-color');
    elements.forEach(function(element) {
        element.style.color = getRandomColor();
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

