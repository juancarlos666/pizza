// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
    $('aside ul li:eq(3), aside ul li:eq(4)').toggle();
    $('aside strong').text("$13");
    $('.btn-crust , .btn-sauce').toggleClass("active");

function pricePizza(nameClass,valor,elemento){

    $(nameClass).toggleClass("active");
    $('aside ul li:nth-child('+elemento+')').toggle();
    //$('aside ul li:nth-child('.concat(elemento).concat(')')).toggle();
    //$('aside').children('ul').children('li:nth-child('.concat(elemento).concat(')')).toggle();
    var total=$('aside').children('strong').text().substring(1);
    if($(nameClass).hasClass('active'))
        $('aside').children('strong').text("$"+(parseInt(total)+valor));
    else
        $('aside').children('strong').text("$"+(parseInt(total)-valor));
    
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
    $(".sauce").toggleClass("sauce-white");
    pricePizza('.btn-sauce',3,4);

});
$('.btn-crust').click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    pricePizza('.btn-crust',5,5);
});
});