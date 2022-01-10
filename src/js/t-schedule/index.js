let eventDates = {};

const countElementDataList = $('.t-schedule__list-items').length;

for (let i = 1; i <= countElementDataList; i++) {
    let element = $(`.t-schedule__list-items:nth-child(${i})`).text();
    eventDates[new Date(`${element}`)] = new Date(`${element}`);
}

$(() => {
    let quizOrderDataCalendarInput = $('#datepickerScheduleTeacher').val()
    $('.t-schedule__info-list-title').text(quizOrderDataCalendarInput)
})

$.datepicker.regional.ru = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', ' суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    // minDate: 0,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    beforeShowDay: function( date ) {
        var highlight = eventDates[date];
        if( highlight ) {
            return [true, "t-active-date", ''];
        } else {
            return [true, '', ''];
        }
    }
};
$.datepicker.setDefaults($.datepicker.regional.ru);

$('#datepickerScheduleTeacher').datepicker().on('change', function(){
    $('.model-calendar').addClass('display-n')
    let quizOrderDataCalendarInput = $('#datepickerScheduleTeacher').val()
    $('.t-schedule__info-list-title').text(quizOrderDataCalendarInput)
});

for (let i = 1; i <= $(".t-schedule__info-items").length; i++ ) {
    if ( i < 10 ) {
        $(`.t-schedule__info-items:nth-child(${i}) .t-schedule__info-items-number`).text('0' + i)
    } else {
        $(`.t-schedule__info-items:nth-child(${i}) .t-schedule__info-items-number`).text(i)
    }
}

$('.t-schedule__info-calendar-btn').on('click', () => {
    $('.modelScheduleTeacher').removeClass('display-n')
    $('body').css('overflow', 'hidden')
}); 
$('.modelScheduleTeacher__wrappers-close').on('click', () => {
    $('body').css('overflow', 'visible')
    $('.modelScheduleTeacher').addClass('display-n')
});
