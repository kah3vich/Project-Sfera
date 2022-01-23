for (let i = 1; i <= $(".t-student__info-list-items").length; i++) {
	$(`.t-student__info-list-items:nth-child(${i})`).on("click", () => {
		$(".t-student__info-chat").removeClass("display-n");
	});
}
