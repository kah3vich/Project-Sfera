"use strict";

var countElementListMenu = $('.menu__list-items').length;

var _loop = function _loop(i) {
  $("#menuList-".concat(i)).on('click', function () {
    for (var j = 1; j <= countElementListMenu; j++) {
      $("#menuList-".concat(j)).removeClass('menu__list-items-active');
    }

    $("#menuList-".concat(i)).addClass('menu__list-items-active');
  });
};

for (var i = 1; i <= countElementListMenu; i++) {
  _loop(i);
}

$('.t-header__nav-client-profile').on('click', function () {
  $('.t-header__nav-client-list').toggleClass('display-n');
  $('.t-header__nav-client-arrow').toggleClass('rotate-180');
});
;
var eventDates = {};
var countElementDataList = $('.t-schedule__list-items').length;

for (var _i = 1; _i <= countElementDataList; _i++) {
  var element = $(".t-schedule__list-items:nth-child(".concat(_i, ")")).text();
  eventDates[new Date("".concat(element))] = new Date("".concat(element));
}

$(function () {
  var quizOrderDataCalendarInput = $('#datepickerScheduleTeacher').val();
  $('.t-schedule__info-list-title').text(quizOrderDataCalendarInput);
});
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
  beforeShowDay: function beforeShowDay(date) {
    var highlight = eventDates[date];

    if (highlight) {
      return [true, "t-active-date", ''];
    } else {
      return [true, '', ''];
    }
  }
};
$.datepicker.setDefaults($.datepicker.regional.ru);
$('#datepickerScheduleTeacher').datepicker().on('change', function () {
  $('.model-calendar').addClass('display-n');
  var quizOrderDataCalendarInput = $('#datepickerScheduleTeacher').val();
  $('.t-schedule__info-list-title').text(quizOrderDataCalendarInput);
});

for (var _i2 = 1; _i2 <= $(".t-schedule__info-items").length; _i2++) {
  if (_i2 < 10) {
    $(".t-schedule__info-items:nth-child(".concat(_i2, ") .t-schedule__info-items-number")).text('0' + _i2);
  } else {
    $(".t-schedule__info-items:nth-child(".concat(_i2, ") .t-schedule__info-items-number")).text(_i2);
  }
}

$('.t-schedule__info-calendar-btn').on('click', function () {
  $('.modelScheduleTeacher').removeClass('display-n');
  $('body').css('overflow', 'hidden');
});
$('.modelScheduleTeacher__wrappers-close').on('click', function () {
  $('body').css('overflow', 'visible');
  $('.modelScheduleTeacher').addClass('display-n');
});
;

var _loop2 = function _loop2(_i3) {
  $("#t_questionListElement_".concat(_i3)).on('click', function () {
    for (var j = 1; j <= $('.t-question__list-block-items').length; j++) {
      $("#t_questionListElement_".concat(j, " .t-question__list-block-text")).addClass('display-n');
      $("#t_questionListElement_".concat(j, " .t-question__list-block-btn")).removeClass('rotate-45');
    }

    if ($("#t_questionListElement_".concat(_i3, " .t-question__list-block-text")).hasClass('display-n')) {
      $("#t_questionListElement_".concat(_i3, " .t-question__list-block-text")).removeClass('display-n');
      $("#t_questionListElement_".concat(_i3, " .t-question__list-block-btn")).addClass('rotate-45');
    } else {
      $("#t_questionListElement_".concat(_i3, " .t-question__list-block-text")).addClass('display-n');
      $("#t_questionListElement_".concat(_i3, " .t-question__list-block-btn")).removeClass('rotate-45');
    }
  });
};

for (var _i3 = 1; _i3 <= $('.t-question__list-block-items').length; _i3++) {
  _loop2(_i3);
}

;

for (var _i4 = 1; _i4 <= $(".t-quiz__page-items").length; _i4++) {
  if (_i4 < 10) {
    $(".t-quiz__page-items:nth-child(".concat(_i4, ") .t-quiz__page-items-number")).text('0' + _i4);
  } else {
    $(".t-quiz__page-items:nth-child(".concat(_i4, ") .t-quiz__page-items-number")).text(_i4);
  }
}

var _loop3 = function _loop3(_i5) {
  $(".t-quiz__type-block-items:nth-child(".concat(_i5, ")")).on('click', function () {
    var type = $(".t-quiz__type-block-items:nth-child(".concat(_i5, ") p")).text();
    $('.t-quiz__age-title p').text(type);
    $('.t-quiz__book-title h3').text(type);
    $('.t-quiz__page-title h3').text(type);
    $('.t-quiz__type').addClass('display-n');
    $('.t-quiz__age').removeClass('display-n');
  });
};

for (var _i5 = 1; _i5 <= $('.t-quiz__type-block-items').length; _i5++) {
  _loop3(_i5);
}

var _loop4 = function _loop4(_i6) {
  $("#t_quizAgeElement_".concat(_i6)).on('click', function () {
    var age = $("#t_quizAgeElement_".concat(_i6, " p")).text();
    $('.t-quiz__book-title p').text(age);
    $('.t-quiz__page-title p').text(age);
    $('.t-quiz__age').addClass('display-n');
    $('.t-quiz__book').removeClass('display-n');
  });
};

for (var _i6 = 1; _i6 <= $('.t-quiz__age-items').length; _i6++) {
  _loop4(_i6);
}

for (var _i7 = 1; _i7 <= $('.t-quiz__book-items').length; _i7++) {
  $(".t-quiz__book-items:nth-child(".concat(_i7, ")")).on('click', function () {
    $('.t-quiz__book').addClass('display-n');
    $('.t-quiz__page').removeClass('display-n');
  });
}

;