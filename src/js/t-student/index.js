for (let i = 1; i <= $(".t-student__info-list-items").length; i++) {
	$(`.t-student__info-list-items:nth-child(${i})`).on("click", () => {
		$(`.wrappers .t-student__info-chat`).addClass("display-n");
		$(`.wrappers .t-student__info-chat:nth-child(${i + 1})`).removeClass("display-n");
	});
}
