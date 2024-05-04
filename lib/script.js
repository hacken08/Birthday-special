
let music = new Audio()

music.src = "/assets/birthday_music.mp3",
    music.volume = 0.4;
music.loop = true
// music.play();


let card = document.querySelector(".valentines")
let gift = document.querySelector('#gift');
let giftShadow = document.querySelector("#giftShadow")
let giftCont = document.querySelector(".giftContainer")
let envlope = document.querySelector(".container")


function updateCountdown() {
    var countdownDate = new Date(2024, 4, 8, 13, 0, 0); 
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";

    if (distance < 0) {
        music.pause();
        document.querySelector(".count-cont").style.display = "none";
        giftCont.style.display = 'block'
        envlope.style.display = 'block'

        clearInterval(x);
    }
}

card.addEventListener("mouseenter", () => document.querySelector(".card").style.top = "-100px")
card.addEventListener("mouseleave", () => document.querySelector(".card").style.top = "0px")


gift.addEventListener('click', () => {
    // gift.classList.replace('shake', 'pulse')
    // gift.src = "/assets/openGif.svg";
    // giftShadow.style.display = "block"
    // gift.style.top = '-10px'
    music.src = "/assets/hbd.mp3";
    music.play();
})



updateCountdown();
var x = setInterval(updateCountdown, 1000);