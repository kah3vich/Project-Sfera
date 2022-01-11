let eventDatesStudent = {};

const countElementDataListStudent = $('.s-schedule__list-items').length;

for (let i = 1; i <= countElementDataListStudent; i++) {
    let element = $(`.s-schedule__list-items:nth-child(${i})`).text();
    eventDatesStudent[new Date(`${element}`)] = new Date(`${element}`);
}

$(() => {
    let quizOrderDataCalendarInput = $('#datepickerScheduleStudent').val()
    $('.s-schedule__info-list-title').text(quizOrderDataCalendarInput)
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
        var highlight = eventDatesStudent[date];
        if( highlight ) {
            return [true, "t-active-date", ''];
        } else {
            return [true, '', ''];
        }
    }
};
$.datepicker.setDefaults($.datepicker.regional.ru);

$('#datepickerScheduleStudent').datepicker().on('change', function(){
    $('.model-calendar').addClass('display-n')
    let quizOrderDataCalendarInput = $('#datepickerScheduleStudent').val()
    $('.s-schedule__info-list-title').text(quizOrderDataCalendarInput)
});

for (let i = 1; i <= $(".s-schedule__info-items").length; i++ ) {
    if ( i < 10 ) {
        $(`.s-schedule__info-items:nth-child(${i}) .s-schedule__info-items-number`).text('0' + i)
    } else {
        $(`.s-schedule__info-items:nth-child(${i}) .s-schedule__info-items-number`).text(i)
    }
}

$('.s-schedule__info-calendar-btn').on('click', () => {
    $('.modelScheduleTeacher').removeClass('display-n')
    $('body').css('overflow', 'hidden')
}); 
$('.modelScheduleTeacher__wrappers-close').on('click', () => {
    $('body').css('overflow', 'visible')
    $('.modelScheduleTeacher').addClass('display-n')
});
