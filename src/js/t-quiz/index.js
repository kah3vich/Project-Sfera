for (let i = 1; i <= $(".t-quiz__page-items").length; i++) {
	if (i < 10) {
		$(`.t-quiz__page-items:nth-child(${i}) .t-quiz__page-items-number`).text("0" + i);
	} else {
		$(`.t-quiz__page-items:nth-child(${i}) .t-quiz__page-items-number`).text(i);
	}
}

for (let i = 1; i <= $(".t-quiz__type-block-items").length; i++) {
	$(`.t-quiz__type-block-items:nth-child(${i})`).on("click", () => {
		const type = $(`.t-quiz__type-block-items:nth-child(${i}) p`).text();
		$(".t-quiz__age-title p").text(type);
		$(".t-quiz__book-title h3").text(type);
		$(".t-quiz__page-title h3").text(type);
		$(".t-quiz__type").addClass("display-n");
		$(".t-quiz__age").removeClass("display-n");
	});
}

for (let i = 1; i <= $(".t-quiz__age-items").length; i++) {
	$(`#t_quizAgeElement_${i}`).on("click", () => {
		const age = $(`#t_quizAgeElement_${i} p`).text();
		$(".t-quiz__book-title p").text(age);
		$(".t-quiz__page-title p").text(age);
		$(".t-quiz__age").addClass("display-n");
		$(".t-quiz__book").removeClass("display-n");
	});
}

for (let i = 1; i <= $(".t-quiz__book-items").length; i++) {
	$(`.t-quiz__book-items:nth-child(${i})`).on("click", () => {
		$(".t-quiz__book").addClass("display-n");
		$(".t-quiz__page").removeClass("display-n");
	});
}

for (let i = 1; i <= $(".t-quiz__page-items").length; i++) {
	$(".t-quiz__page-items").on("click", () => {
		$(".t-quiz__pages").removeClass("display-n");
	});
}

$(".t-quiz__age-back").on("click", () => {
	$(".t-quiz__age").addClass("display-n");
	$(".t-quiz__type").removeClass("display-n");
});
$(".t-quiz__book-back").on("click", () => {
	$(".t-quiz__book").addClass("display-n");
	$(".t-quiz__age").removeClass("display-n");
});
$(".t-quiz__page-back").on("click", () => {
	$(".t-quiz__page").addClass("display-n");
	$(".t-quiz__pages").addClass("display-n");
	$(".t-quiz__book").removeClass("display-n");
});
