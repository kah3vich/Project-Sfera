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

$("#numberAllQuiz").html($(".elementQuiz").length);

let activeQuizElement = 0;
let elementQuizCount = 6;

for (let i = 0; i <= $(".s-search__quiz-navig").length; i++) {
	$(`.s-search__quiz-navig:nth-child(${i})`).on("click", () => {
		changeSlide(i);
	});
}

$(".s-search__quiz-btn").on("click", function () {
	changeSlide("next");
});

function displayElementQuiz() {
	$(".s-search__quiz-things").addClass("display-n");
	$(".s-search__quiz-long").addClass("display-n");
	$(".s-search__quiz-times").addClass("display-n");
	$(".s-search__quiz-stat").addClass("display-n");
	$(".s-search__quiz-student").addClass("display-n");
	$(".s-search__quiz-price").addClass("display-n");
}

function lastElementQuiz() {
	$(".s-search__quiz-btn").removeClass("display-n");
	$(".s-search__quiz-btns").addClass("display-n");
}

function activeNavQuiz() {
	for (let i = 1; i <= $(".s-search__quiz-navig").length; i++) {
		$(`.s-search__quiz-navig:nth-child(${i})`).removeClass("s-search__quiz-navig-active");
	}
}

function changeSlide(id) {
	if (id === "next") {
		activeQuizElement++;
		if (activeQuizElement === elementQuizCount) {
			activeQuizElement = 0;
		}
	}
	if (activeQuizElement == 0) {
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(1)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-things").removeClass("display-n");
		$("#numberActiveQuiz").html(1);
		$(".s-search__quiz-title h3").html("Выбор предмета");
	}
	if (activeQuizElement == 1) {
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(2)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-long").removeClass("display-n");
		$("#numberActiveQuiz").html(2);
		$(".s-search__quiz-title h3").html("Выбор длительности и интенсивности");
	}
	if (activeQuizElement == 2) {
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(3)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-times").removeClass("display-n");
		$("#numberActiveQuiz").html(3);
		$(".s-search__quiz-title h3").html("Время проведения занятий");
	}
	if (activeQuizElement == 3) {
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(4)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-stat").removeClass("display-n");
		$("#numberActiveQuiz").html(4);
		$(".s-search__quiz-title h3").html("Требования к репетитору");
	}
	if (activeQuizElement == 4) {
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(5)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-student").removeClass("display-n");
		$("#numberActiveQuiz").html(5);
		$(".s-search__quiz-title h3").html("Об ученике");
	}
	if (activeQuizElement == 5) {
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(6)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-price").removeClass("display-n");
		$(".s-search__quiz-btns").removeClass("display-n");
		$(".s-search__quiz-btn").addClass("display-n");
		$("#numberActiveQuiz").html(6);
		$(".s-search__quiz-title h3").html("Стоимость занятия");
	}
	if (id == 1) {
		activeQuizElement = 0;
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(1)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-things").removeClass("display-n");
		$("#numberActiveQuiz").html(1);
		$(".s-search__quiz-title h3").html("Выбор предмета");
	}
	if (id == 2) {
		activeQuizElement = 1;
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(2)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-long").removeClass("display-n");
		$("#numberActiveQuiz").html(2);
		$(".s-search__quiz-title h3").html("Выбор длительности и интенсивности");
	}
	if (id == 3) {
		activeQuizElement = 2;
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(3)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-times").removeClass("display-n");
		$("#numberActiveQuiz").html(3);
		$(".s-search__quiz-title h3").html("Время проведения занятий");
	}
	if (id == 4) {
		activeQuizElement = 3;
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(4)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-stat").removeClass("display-n");
		$("#numberActiveQuiz").html(4);
		$(".s-search__quiz-title h3").html("Требования к репетитору");
	}
	if (id == 5) {
		activeQuizElement = 4;
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(5)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-student").removeClass("display-n");
		$("#numberActiveQuiz").html(5);
		$(".s-search__quiz-title h3").html("Об ученике");
	}
	if (id == 6) {
		activeQuizElement = 5;
		activeNavQuiz();
		$(`.s-search__quiz-navig:nth-child(6)`).addClass("s-search__quiz-navig-active");
		displayElementQuiz();
		lastElementQuiz();
		$(".s-search__quiz-price").removeClass("display-n");
		$(".s-search__quiz-btns").removeClass("display-n");
		$(".s-search__quiz-btn").addClass("display-n");
		$("#numberActiveQuiz").html(6);
		$(".s-search__quiz-title h3").html("Стоимость занятия");
	}
}

function removeTimeElement(e) {
	let valueElement = e.value;
	if ($(".s-search__quiz-time-items").length == 1) {
	} else {
		$(`#${valueElement}`).remove();
	}
}
