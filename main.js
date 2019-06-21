function scrollAppear() {
    var container = document.querySelector(".container");
    var introPosition = container.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introPosition < screenPosition) {
        container.classList.add("intro-appear");
    }
}

window.addEventListener("scroll", scrollAppear);

function bChanger() {
    if(this.scrollY > this.innerHeight / 2) {
        document.body.classList.add("b-active");
    } else {
        document.body.classList.remove("b-active");
    }
}

window.addEventListener("scroll", bChanger);

let currentPixel = window.pageYOffset;

function skew() {
    let newPixel = window.pageYOffset;
    let increment = newPixel - currentPixel;
    let speed = increment * 0.20;
    document.querySelector("section").style.transform = "skew(" + speed + "deg)";

    currentPixel = newPixel;
    requestAnimationFrame(skew);
}

skew();