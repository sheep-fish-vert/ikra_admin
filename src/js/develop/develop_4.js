function hideLeftMenu() {
    $('.left-menu .hide-menu').click(function() {
        if( $(window).width()>992) {
            $('.left-menu').stop().toggleClass('hide');
            $('.global-wrapper .main').stop().toggleClass('hide-menu');
            $('.global-wrapper .header').stop().toggleClass('hide-menu');
        }
    });

    $('.title > span.button-menu, .left-menu .left-menu-link li.hide-menu').click(function(event) {
        if( $(window).width()<992) {
            $('.left-menu').stop().toggleClass('mobile-show');
            $('.header').stop().toggleClass('mobile-show');
        }
    });
}
function arrowInLeftMenu(){
    if( $('.left-menu-link ul li').hasClass('active') && $(window).width()>992) {
        var arrow = '<span class="left-menu-mini-arrow"></span>';
        $('.left-menu').after(arrow);
        var activeLi = $('.left-menu-link ul li.active');

        function showArrow(){
            $('.left-menu-mini-arrow').css({
                'top': activeLi.offset().top + activeLi.outerHeight()/2-8,// its a fucking magic
                'left':$('.left-menu').width()
            });

            // console.log('activeLi.offset().top ' , activeLi.offset().top);
        }
        showArrow();

        $('.left-menu-wrap').on('scroll', function() {
            setTimeout(function(){
                showArrow();
            },50);

        });
        // $(document).on('scroll', function() {

        //      showArrow();
        // });

    }else if( $('.left-menu-mini-arrow') ){
        $('.left-menu-mini-arrow').remove();
    }
}

$(document).ready(function(){
    hideLeftMenu();
    arrowInLeftMenu();
});

$(window).load(function(){

});

$(window).resize(function(){

});
