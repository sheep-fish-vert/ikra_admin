
/* search-line func */

    function searchLineFunc(){

        $('.style-it').each(function(){

            var placeholder = {};

            if($(this).attr('data-placeholder')){
                placeholder.name = $(this).attr('data-placeholder');
            }

            $(this).styler(placeholder);

        });

    };

/* /search-line func */

$(document).ready(function(){

    searchLineFunc();

});

$(window).load(function(){

});

$(window).resize(function(){

});