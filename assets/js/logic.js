const carousel = document.querySelector('#carouselExample'); // Selecciona el elemento del carrusel con la clase "#carouselExample"//

carousel.options = 1500; // Ajusta la velocidad del carrusel en 1.5 segundos //

$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide("slow");
    });
});
// Selector para elementos con clase ""
$(document).ready(function() {
    $(".txtP").click(function() {
        $(this).css({
        "color": "#E7163C",
        "font-size": "2em",
        "font-weight": 900
        });
    });
    $(".txtP").dblclick(function() {
        $(this).css({
        "color": "white",
        "font-size": "1.2em",
        "font-weight": 400
        });
    });
});