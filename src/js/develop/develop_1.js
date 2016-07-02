
/* search-line func */

    function searchLineFunc(){

        $('.style-it').each(function(){

            $(this).styler();

        });

    };

/* /search-line func */

/* datepicker statistic */

    function datepickersStatistic(){

        $.datepicker.regional['ru'] = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false
        };
        $.datepicker.setDefaults($.datepicker.regional['ru']);

        $( "#from" ).datepicker({
            showOn: "both",
            buttonImage:'images/datepicker-img.png',
            onClose: function( selectedDate ) {
                $( "#to" ).datepicker( "option", "minDate", selectedDate );
            }
        });
        $( "#to" ).datepicker({
            showOn: "both",
            buttonImage:'images/datepicker-img.png',
            onClose: function( selectedDate ) {
                $( "#from" ).datepicker( "option", "maxDate", selectedDate );
            }
        });

    }

/* /datepickers statistic */

$(document).ready(function(){

    searchLineFunc();
    datepickersStatistic();

});

$(window).load(function(){

});

$(window).resize(function(){

});