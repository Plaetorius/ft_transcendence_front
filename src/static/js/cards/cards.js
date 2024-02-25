const cardPopupView = document.getElementById("card-popup");



document.querySelectorAll(".history-perk-card").forEach(element => {
	element.addEventListener('click', () => {
		cardPopupView.classList.remove("d-none");
		cardPopupView.classList.add("d-block");
		activeSection.classList.add("blurry");
		header.classList.add("blurry");
	});
});

document.addEventListener('click', (event) => {
	if (!cardPopupView.contains(event.target) && !event.target.matches('.history-perk-card')) {
		cardPopupView.classList.add("d-none");
		cardPopupView.classList.remove("d-block");
		activeSection.classList.remove("blurry");
		header.classList.remove("blurry");
	}
});
