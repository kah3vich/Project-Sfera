$(() => {
	$("select.quiz-select").each(function () {
		var $this = $(this);

		var html =
			'<div class="quiz-select-css quiz-select-item"><div class="quiz-select-placeholder">';
		html += $this.find("option:eq(0)").text();
		html += '</div><div class="quiz-select-block display-n"><div class="quiz-select-wrapper">';
		$this.find("option:eq(0)").css("display", "none");
		$this.find("option").each(function () {
			html +=
				'<button class="quiz-select-element" data-val="' +
				$(this).attr("value") +
				'" type="button">' +
				$(this).text() +
				"</button>";
		});
		html += "</div></div></div></div>";
		$(html).insertAfter($this.hide());

		$('.quiz-select-element[data-val="undefined"]').remove();

		var $next = $this.next();
		$next
			.find(".quiz-select-placeholder")
			.on("click", function (e) {
				e.preventDefault();
				$next.find(".quiz-select-block").toggleClass("display-n"),
					$next.toggleClass("quiz-select-item-active");
			})
			.end()
			.find(".quiz-select-element")
			.on("click", function (e) {
				e.preventDefault();
				$next.find(".quiz-select-placeholder").text($(this).text());
				$this.val($(this).data("val")).trigger("change");
				$next.find(".quiz-select-placeholder").trigger("click");
			});
	});
});
