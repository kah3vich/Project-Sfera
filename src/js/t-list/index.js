// for (let i = 1; i <= $(".t-student__info-list-items").length; i++) {
// 	$(`.t-student__info-list-items:nth-child(${i})`).on("click", () => {
// 		$(".t-student__info-chat").removeClass("display-n");
// 	});
// }

$(function () {
	$("#teacherListFilter").css("display", "none");
	$("#teacherListFilterCap").css("display", "none");
	$("#teacherListFilter").after(
		`<div class="t_list-select-item"><div class="t_list-select-placeholder">${$(
			"#teacherListFilter"
		)
			.children("option")
			.eq(0)
			.val()}</div><div id="listConstructorElementPay" class="t_list-select-wrapper display-n"></div></div>`
	);
	let count = $("#teacherListFilter").children("option").length;
	for (let i = 0; i < count; i++) {
		let arrows = $("#teacherListFilter").children("option").eq(i).val();
		let newElementBlock = document.createElement("button");
		newElementBlock.classList.add("t_list-select-element");
		newElementBlock.id = `t_list-select-element-${i}`;
		newElementBlock.innerHTML = `${arrows}`;
		document.getElementById("listConstructorElementPay").appendChild(newElementBlock);
		$(`#t_list-select-element-${i}`).attr("value", `${arrows}`);
	}
	if ($(".t_list-select-placeholder").text() == "") {
		$(".t_list-select-placeholder").text($("#teacherListFilterCap").text());
	}
	$("#t_list-select-element-0").css("display", "none");
	$(".t_list-select-item").on("click", function () {
		$(".t_list-select-wrapper").toggleClass("display-n");
		$(".t_list-select-item").toggleClass("t_list-select-item-active");
	});
	$(".t_list-select-element").on("click", function () {
		let idElement = this.id;
		let valueElement = $(`#${idElement}`).val();
		$(".t_list-select-placeholder").html(valueElement);
		$("#teacherListFilter option:nth-child(1)").val(valueElement);
		$("#teacherListFilter option:nth-child(1)").html(valueElement);
		for (let i = 1; i <= $(".t_list-select-element").length; i++) {
			$(`#t_list-select-element-${i}`).removeClass("t_list-select-active");
		}
		$(this).addClass("t_list-select-active");
	});
});
