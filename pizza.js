// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
$('aside').children('ul').children('li:nth-child(4)').toggle();
$('aside').children('ul').children('li:last-child').toggle();
$('aside').children('strong').text("$13");
$('.btn-crust').toggleClass("active");
$('.btn-sauce').toggleClass("active");

function pricePizza(nameClass,valor,elemento){

    $(nameClass).toggleClass("active");
    if(elemento==1)
        $('aside').children('ul').children('li:first').toggle();
    else if(elemento==5)
        $('aside').children('ul').children('li:last').toggle();
    else
        $('aside').children('ul').children('li:nth-child('.concat(elemento).concat(')')).toggle();
    var total=$('aside').children('strong').text().substring(1);
    if($(nameClass).hasClass('active'))
        $('aside').children('strong').text("$".concat(parseInt(total)+valor));
    else
        $('aside').children('strong').text("$".concat(parseInt(total)-valor));
    
}
$('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    pricePizza('.btn-pepperonni',1,1);
});
$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    pricePizza('.btn-mushrooms',1,2)
});
$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    pricePizza('.btn-green-peppers',1,3);
});
$("section").removeClass("crust-gluten-free sauce-white");
//Los dos ultimos botones
$('.btn-sauce').click(function(){
    $("section").toggleClass("crust-gluten-free");
    pricePizza('.btn-sauce',3,4);

});
$('.btn-crust').click(function(){
    $("section").toggleClass("sauce-white");
    pricePizza('.btn-crust',5,5);
});
});