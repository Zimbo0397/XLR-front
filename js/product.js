//(function ($) {
//
//})(jQuery);
$(document).ready(function () {
    $('#product-bxslider').bxSlider({
        pagerCustom: '#product-bx-pager',
        autoControls: true
    });

    $('.new-product-list').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10,
        pager: false
    });

    $('.last-overview-list').bxSlider({
        slideWidth: 220,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10,
        pager: false
    });
});
