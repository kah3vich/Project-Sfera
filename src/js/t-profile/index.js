const countElementListMenu = $('.menu__list-items').length;

for (let i = 1; i <= countElementListMenu; i++) {
    $(`#menuList-${i}`).on('click', () => {
        for (let j = 1; j <= countElementListMenu; j++) {
            $(`#menuList-${j}`).removeClass('menu__list-items-active');
        }
        $(`#menuList-${i}`).addClass('menu__list-items-active');
    });
}

$('.t-header__nav-client-profile').on('click', () => {
    $('.t-header__nav-client-list').toggleClass('display-n');
    $('.t-header__nav-client-arrow').toggleClass('rotate-180');
});

