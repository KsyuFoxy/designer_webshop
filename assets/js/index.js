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
