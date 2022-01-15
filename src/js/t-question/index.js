for (let i = 1; i <= $(".t-question__list-block-items").length; i++) {
	for (let j = 1; j <= $(".t-question__list-block-items").length; j++) {
		$(`#t_questionListElement_${j} .t-question__list-block-text`).addClass("display-n");
		$(`#t_questionListElement_${j} .t-question__list-block-btn`).removeClass("rotate-45");
	}
	$(`#t_questionListElement_${i}`).on("click", () => {
		if ($(`#t_questionListElement_${i} .t-question__list-block-text`).hasClass("display-n")) {
			$(`#t_questionListElement_${i} .t-question__list-block-text`).removeClass("display-n");
			$(`#t_questionListElement_${i} .t-question__list-block-btn`).addClass("rotate-45");
		} else {
			$(`#t_questionListElement_${i} .t-question__list-block-text`).addClass("display-n");
			$(`#t_questionListElement_${i} .t-question__list-block-btn`).removeClass("rotate-45");
		}
	});
}
