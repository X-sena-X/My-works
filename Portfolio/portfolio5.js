
$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})
const elements = document.getElementsByClassName('alpha');
for (let i = 0; i <= elements.length; i++) {
    elements[i].addEventListener('animationend', function (e) {
        elements[i].classList.remove('animated');
    });
    elements[i].addEventListener('mouseover', function (e) {
        elements[i].classList.add('animated');
    });
}
$("#page-container .sidebar #sidebar-wrapper .sidebar-nav li a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html").animate({ scrollTop: $(href).offset().top }, 800);
});
var preloader = document.getElementById('preloader');

function myFunction(){
    preloader.style.display = "none";
}
