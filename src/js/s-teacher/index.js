for (let i = 1; i <= $(".s-teacher__info-list-items").length; i++) {
	$(`.s-teacher__info-list-items:nth-child(${i})`).on("click", () => {
		$(`.wrappers .s-teacher__info-chat`).addClass("display-n");
		$(`.wrappers .s-teacher__info-chat:nth-child(${i + 1})`).removeClass("display-n");
	});
}
