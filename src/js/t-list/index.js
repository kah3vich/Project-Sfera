$(() => {
	$("select.js-select").each(function () {
		var $this = $(this);

		var html =
			'<div class="js-select-css sort-select-item"><div class="sort-select-placeholder">';
		html += $this.find("option:eq(0)").text();
		html += '</div><div class="sort-select-block display-n"><div class="sort-select-wrapper">';
		$this.find("option:eq(0)").css("display", "none");
		$this.find("option").each(function () {
			html +=
				'<button class="sort-select-element" data-val="' +
				$(this).attr("value") +
				'" type="button">' +
				$(this).text() +
				"</button>";
		});
		html += "</div></div></div></div>";
		$(html).insertAfter($this.hide());

		$('.sort-select-element[data-val="undefined"]').remove();

		var $next = $this.next();
		$next
			.find(".sort-select-placeholder")
			.on("click", function (e) {
				e.preventDefault();
				$next.find(".sort-select-block").toggleClass("display-n"),
					$next.toggleClass("sort-select-item-active");
			})
			.end()
			.find(".sort-select-element")
			.on("click", function (e) {
				e.preventDefault();
				$next.find(".sort-select-placeholder").text($(this).text());
				$this.val($(this).data("val")).trigger("change");
				$next.find(".sort-select-placeholder").trigger("click");
			});
	});
});
