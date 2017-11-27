$(window).on('load resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
        $(".nav").addClass("nav-stacked");
        $('.header-content').removeClass('container').addClass('container-fluid');
        $('.nav li').hide();
        $('.nav-menu-close').hide();
        $('.nav-menu-open').show();
        $('.nav').click(function() {
            $('.nav li').fadeToggle();
            $('.nav-menu-close').toggle();
            $('.nav-menu-open').toggle();
        });
        $('.search-icon').click(function() {
            $('.search-icon').toggleClass('glyphicon-search').toggleClass('glyphicon-remove');
            $('.search-additional-content').slideToggle();
        })
    }
    // if (viewportWidth < 991) {
    //
    // }
    else {
        $(".nav").removeClass("nav-stacked");
        $('.header-content').removeClass('container-fluid').addClass('container');
    }
});

//image carousel
$(document).ready(function(){
  $('.image-carousel').slick({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,

  });
 // scroll nav
 $(document).scroll(function() {
     if ($(document).scrollTop() > 15) {
         $('.shop-logo img').attr('src', 'assets/images/ND_logo_v2_scroll.png');
         $('.header-content').parent('div').removeClass('scroll-header-up').addClass('scroll-header-down');
     }
     else {
        $('.shop-logo img').attr('src', 'assets/images/ND_logo_v2.png');
        $('.header-content').parent('div').removeClass('scroll-header-down').addClass('scroll-header-up');
     }
  })
});

// get products details from products.js

$(window).on('load', function () {
    var items = $();
    for(i = 0; i < products.length; i++) {
        items = items.add(
            '<div class="item-wrapper col-xs-12 col-sm-6 col-md-4 col-lg-3">' +
                '<div class="item-content">' +
                    '<div class="item-like-icon glyphicon glyphicon-heart"></div>' +
                    '<div class="item-image">' +
                        '<img src="assets/images/' + products[i].image + ' ">' +
                    '</div>' +
                    '<p class="item-description">' + products[i].description + '</p>' +
                    '<p class="item-price">' +
                    '<span class="item-price-value">' + products[i].price + '</span>' +
                    ' <span class="glyphicon glyphicon-eur"></span>' +
                    '</p>' +
                '</div>' +
            '</div>'
        )
    }
    $('.products-content-row').append(items);
    $('.item-content').click(function() {
        console.log("show item details")
    })
})
