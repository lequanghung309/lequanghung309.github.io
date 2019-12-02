$('.testimonial-pisc img').click(function() {
    $('.testimonial-pisc img').removeClass("active");
    $(this).addClass("active");

    $(".testimonial").removeClass("active");
    $("#" + $(this).attr("alt")).addClass("active");
})

let swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

  $('.filter-all').on('click', function() {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.all').removeClass('hide');
  });
  
  
  $('.filter-landscape').on('click', function() {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.landscape').removeClass('hide');
    $('.urban, .portrait').addClass('hide');
  });
  
 
  $('.filter-urban').on('click', function() {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.urban').removeClass('hide');
    $('.portrait, .landscape').addClass('hide');
  });
  
  
  $('.filter-portrait').on('click', function() {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.portrait').removeClass('hide');
    $('.landscape, .urban').addClass('hide');
  });