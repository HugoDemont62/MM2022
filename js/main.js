let carousel = document.getElementsByClassName(".carousel");

currdeg = 0;

const next = document.getElementById("next");
next.addEventListener("click", { d: "n" }, rotate);

const prev = document.getElementById("prev");
prev.addEventListener("click", { d: "p" }, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        transform: "rotateY(" + currdeg + "deg)",
    });
}