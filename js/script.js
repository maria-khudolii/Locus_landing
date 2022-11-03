var seen = 0;
$(window).scroll(function() {
    var section_height = $('.results__list').offset().top - window.innerHeight;
    if (seen == 0 && $(window).scrollTop() > section_height) {
        $('.result__number').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');
            $({countNum: $this.text()}).animate({countNum: countTo},
            {duration: 3000, easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        seen = 1;
    }
});

$('.testimonial__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow:1,
  slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots'
});



$(".menu__trigger").click(function() {
    $( this ).closest(".wrapper").toggleClass('open')
  })

  $('.menu__trigger').click(function() { 
    $( this ).toggleClass('active')
  })

