$(".t-edit__info-plus").on("click", () => {
	let a = 1;

	let elementsS = $(".t-edit__info-student input").attr("placeholder");
	let inviteSectionS = document.getElementsByClassName("t-edit__info-student")[0];
	let newElementS = document.createElement("div");
	newElementS.classList.add("t-edit__info-students");
	newElementS.innerHTML = `<input type="text" placeholder="${elementsS}" id='edit__student_${a}' />`;
	inviteSectionS.appendChild(newElementS);

	let elementsT = $(".t-edit__info-time input").attr("placeholder");
	let inviteSectionT = document.getElementsByClassName("t-edit__info-time")[0];
	let newElementT = document.createElement("div");
	newElementT.classList.add("t-edit__info-times");
	newElementT.innerHTML = `<input type="text" placeholder="${elementsT}" id='edit__time_${a}' />`;
	inviteSectionT.appendChild(newElementT);

	let elementsP = $(".t-edit__info-price input").attr("placeholder");
	let inviteSectionP = document.getElementsByClassName("t-edit__info-price")[0];
	let newElementP = document.createElement("div");
	newElementP.classList.add("t-edit__info-prices");
	newElementP.innerHTML = `<input type="text" placeholder="${elementsP}" id='edit__price_${a}' />`;
	inviteSectionP.appendChild(newElementP);

	a++;
});
