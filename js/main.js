let carousel = document.querySelector(".carousel");

currdeg = 0;

function rotate(d) {
    console.log(carousel);
    if (d == "n") {
        currdeg = currdeg - 60;
    }
    if (d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.style.transform = "rotateY(" + currdeg + "deg)";
}