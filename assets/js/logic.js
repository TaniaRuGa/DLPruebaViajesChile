const carousel = document.querySelector('#carouselExample'); // Selecciona el elemento del carrusel con la clase "#carouselExample"//

carousel.options = 1500; // Ajusta la velocidad del carrusel en 1.5 segundos //

$(document).ready(function(){
    $("parrafoCard").dblclick(function(){
        $(this).hide("slow");
    });
});
// Selector para elementos con clase ""
$(document).ready(function() {
    $(".textD").click(function() {
        $(this).css({
        "color": "#BA23DB",
        "font-size": "2em",
        "font-weight": 900
        });
    });
    $(".textD").dblclick(function() {
        $(this).css({
        "color": "white",
        "font-size": "1.2em",
        "font-weight": 400
        });
    });
});