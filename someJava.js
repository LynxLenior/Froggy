document.querySelector(".hover-btn").addEventListener("mouseenter", function() {
    document.querySelector(".pictures").style.backgroundImage = "url('https://raw.githubusercontent.com/LynxLenior/Froggy/main/Image/Yipee.gif')";
});

document.querySelector(".hover-btn").addEventListener("mouseleave", function() {
    document.querySelector(".pictures").style.backgroundImage = "url('https://raw.githubusercontent.com/LynxLenior/Froggy/main/Image/CatRose.jpg')";
});