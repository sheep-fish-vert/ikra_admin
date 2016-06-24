function hideLeftMenu() {
    $('.left-menu .hide-menu').click(function() {
        $('.left-menu').stop().toggleClass('hide');
        $('.global-wrapper .main').stop().toggleClass('hide-menu');
    });
}


$(document).ready(function(){
    hideLeftMenu();
});

$(window).load(function(){

});

$(window).resize(function(){

});
