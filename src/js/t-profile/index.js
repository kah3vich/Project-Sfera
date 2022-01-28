const countElementListMenu = $(".menu__list-items").length;

for (let i = 1; i <= countElementListMenu; i++) {
	$(`#menuList-${i}`).on("click", () => {
		for (let j = 1; j <= countElementListMenu; j++) {
			$(`#menuList-${j}`).removeClass("menu__list-items-active");
		}
		$(`#menuList-${i}`).addClass("menu__list-items-active");
	});
}

$(".t-header__nav-client-profile").on("click", () => {
	$(".t-header__nav-client-list").toggleClass("display-n");
	$(".t-header__nav-client-arrow").toggleClass("rotate-180");
});

$(() => {
	if ($(".t-profile__info-student-items").length == 0) {
		$(".t-profile__info-student-nav").addClass("display-n");
		$(".t-profile__info-student-list").addClass("display-n");
		$(".t-profile__info-student-banner").removeClass("display-n");
	} else {
		$(".t-profile__info-student-nav").removeClass("display-n");
		$(".t-profile__info-student-list").removeClass("display-n");
		$(".t-profile__info-student-banner").addClass("display-n");
	}

	if ($(".t-profile__info-lessons-items").length == 0) {
		$(".t-profile__info-lessons-nav").addClass("display-n");
		$(".t-profile__info-lessons-list").addClass("display-n");
		$(".t-profile__info-lessons-banner").removeClass("display-n");
	} else {
		$(".t-profile__info-lessons-nav").removeClass("display-n");
		$(".t-profile__info-lessons-list").removeClass("display-n");
		$(".t-profile__info-lessons-banner").addClass("display-n");
	}
});
