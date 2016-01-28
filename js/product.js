//(function ($) {
//
//})(jQuery);
$(document).ready(function () {
    $('#product-bxslider').bxSlider({
        pagerCustom: '#product-bx-pager',
        autoControls: true
    });

    $('.new-product-list').bxSlider({
        slideWidth: 150,
        minSlides: 2,
        maxSlides: 5,
        slideMargin: 10,
        pager: false
    });

    $('.last-overview-list').bxSlider({
        slideWidth: 150,
        minSlides: 1,
        maxSlides: 5,
        slideMargin: 10,
        pager: false
    });
});
