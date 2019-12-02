$('.burger-container').click(function(){
    $('.header').toggleClass('menu-opened');
    if($('.fa.fa-user-circle').css('display') === 'none'){
        $('.fa.fa-shopping-cart').hide('fast');   
        $('.fa.fa-user-circle').show(1000);
    }else{
        $('.fa.fa-shopping-cart').show(1000);   
        $('.fa.fa-user-circle').hide('fast');
    }
   
})


$('#open').click(function(){
    $('.menu-item').addClass('hide-item');
    $('.search').addClass('ative');
    $('#close').show();
    $('#open').hide();
 
})

$('#close').click(function(){
    $('.menu-item').removeClass('hide-item');
    $('.search').removeClass('ative');
    $('#open').show();
    $('#close').hide();
})

