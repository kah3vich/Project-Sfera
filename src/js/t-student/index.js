for (let i = 1; i <= $(".t-student__info-list-wrapper li").length; i++) {
	$(`.t-student__info-list-wrapper li:nth-child(${i})`).on("click", () => {
		$(`.wrappers .t-student__info-chat`).addClass("display-n");
		$(`.wrappers .t-student__info-chat:nth-child(${i + 1})`).removeClass("display-n");
	});
}
