var viewportWidth = $(window).width();

$(window).on('load resize', function mobileViewUpdate() {
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
            hideSearch();
        });
        $('.search-icon').click(function() {
            $('.search-icon').toggleClass('glyphicon-search').toggleClass('glyphicon-remove');
            $('.search-additional-content').slideToggle();
            hideNav();
        })
    }
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
         var menuWhiteIcon = $('.nav-menu-open').attr("src").replace("assets/images/nav_menu_image_small.png", "assets/images/nav_menu_image_small_hover.png");
         $('.nav-menu-open').attr("src", menuWhiteIcon);
     }
     else {
        $('.shop-logo img').attr('src', 'assets/images/ND_logo_v2.png');
        $('.header-content').parent('div').removeClass('scroll-header-down').addClass('scroll-header-up');
        var menuViolettIcon = $('.nav-menu-open').attr("src").replace("assets/images/nav_menu_image_small_hover.png", "assets/images/nav_menu_image_small.png");
        $('.nav-menu-open').attr("src", menuViolettIcon);
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
                    '<div class="item-like-icon glyphicon glyphicon-heart-empty"></div>' +
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
    $('.item-description, .item-image').hover(function(e) {
        $(this).parent().toggleClass('item-content-hover');
    });

    // likes
    $('.item-like-icon').click(function(e) {
        $(e.target).toggleClass('glyphicon-heart-empty').toggleClass('glyphicon-heart');
    })
    // new product page
    $('.item-description, .item-image').click(function(e) {
        var choosenItemIndex = $(this).parent().index('.item-content');
        $('.main-images-section, .products-content').hide();
        $('.product-details').show();
        $('.product-image ').find('img').attr('src', 'assets/images/' + products[choosenItemIndex].image);
        $('.product-description').text(products[choosenItemIndex].description);
        $('.product-price-value').text(products[choosenItemIndex].price);
        if(viewportWidth < 768) {
            hideNav();
            hideSearch();
        }
        $('.back-arrow').click(function() {
            $('.main-images-section, .products-content').show();
            $('.product-details').hide();
            if (viewportWidth < 768) {
                hideNav();
                hideSearch();
            }

        })
    })
    var cart =  $('.shopping-cart-quantity');
    var cartQty = cart.text() === 0;
    if (cartQty === 0) {
        cart.hide();
    }
    else {
        cart.show();
    }
    var cartItems = $();

    $('.cart-button').click(function(e) {
        cart.text(cartQty += 1);
        cart.show();
        var itemQty = 1;
        var itemInfo = $(e.target).parent();
        var itemPrice = itemInfo.find('.product-price').text();
        cartItems = cartItems.add(
            '<div class="row cart-product-content">' +
                '<span class="cart-product-number col-md-1">1</span>' +
                '<span class="cart-product-name col-md-3">' + itemInfo.find('.product-description').text() + '</span>' +
                '<span class="cart-product-image col-md-2">' +
                    '<img src="' + itemInfo.parent().find('.product-image img').attr("src") + '">' +
                '</span>' +
                '<span class="cart-product-price col-md-1">' + itemPrice + '</span>' +
                '<span class="cart-product-qty col-md-1">' + itemQty + '</span>' +
                '<span class="delete-cart-product col-md-2">x</span>' +
                '<span class="cart-product-amount col-md-2">' + parseFloat(itemQty*itemPrice, 10).toString() + '</span>' +
            '</div>'

        )
        $('.cart-product-details').append(cartItems);
        $('.cart-product-name').text()
    })
    cart.click(function() {
        // cart modal
            // $('.modal-content').append(thisItem);
            TweenLite.to($("#cartModal"), 1, {className:"cart-modal-show", delay:0.5, ease:Elastic.easeOut.config(1, 0.5)});
            $(".close-cartModal").click(function() {
                TweenLite.to($("#cartModal"), 1, {className:"cart-modal", ease:Power0.easeIn});
            })
    })

})
function hideNav() {
    $('.nav li').hide();
    $('.nav-menu-close').hide();
    $('.nav-menu-open').show();
}
function hideSearch() {
    $('.search-additional-content').slideUp();
    $('.search-icon').addClass('glyphicon-search').removeClass('glyphicon-remove');
}
