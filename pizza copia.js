// Write your Pizza Builder JavaScript in this file.

$('aside').children('ul').children('li:nth-child(4)').toggle();
$('aside').children('ul').children('li:last-child').toggle();
$('aside').children('strong').text("$13");
$('.btn-crust').toggleClass("active");
$('.btn-sauce').toggleClass("active");


$('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.btn-pepperonni').toggleClass("active");
    $('aside').children('ul').children('li:first').toggle();
    var total=$('aside').children('strong').text().substring(1);
    if($('.btn-pepperonni').hasClass('active'))
        $('aside').children('strong').text("$".concat(parseInt(total)+1));
    else
        $('aside').children('strong').text("$".concat(parseInt(total)-1));
});
$('.btn-mushrooms').click(function(){
    //$('.mushroom').children().toggle();
    $('.mushroom').toggle();
    $('.btn-mushrooms').toggleClass("active");
    $('aside').children('ul').children('li:nth-child(2)').toggle();
    var total=$('aside').children('strong').text().substring(1);
    if($('.btn-mushrooms').hasClass('active'))
        $('aside').children('strong').text("$".concat(parseInt(total)+1));
    else
        $('aside').children('strong').text("$".concat(parseInt(total)-1));
});
$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.btn-green-peppers').toggleClass("active");
    $('aside').children('ul').children('li:nth-child(3)').toggle();
    var total=$('aside').children('strong').text().substring(1);
    if($('.btn-green-peppers').hasClass('active'))
        $('aside').children('strong').text("$".concat(parseInt(total)+1));
    else
        $('aside').children('strong').text("$".concat(parseInt(total)-1));
});
	
$("section").removeClass("crust-gluten-free sauce-white");

//Los dos ultimos botones
$('.btn-sauce').click(function(){
    $('.btn-sauce').toggleClass("active");
    $('aside').children('ul').children('li:nth-child(4)').toggle();
    var total=$('aside').children('strong').text().substring(1);
    if($('.btn-sauce').hasClass('active'))
        $('aside').children('strong').text("$".concat(parseInt(total)+3));
    else
        $('aside').children('strong').text("$".concat(parseInt(total)-3));

});
$('.btn-crust').click(function(){
    $('.btn-crust').toggleClass("active");
    $('aside').children('ul').children('li:last-child').toggle();
    var total=$('aside').children('strong').text().substring(1);
    if($('.btn-crust').hasClass('active'))
        $('aside').children('strong').text("$".concat(parseInt(total)+5));
    else
        $('aside').children('strong').text("$".concat(parseInt(total)-5));
});