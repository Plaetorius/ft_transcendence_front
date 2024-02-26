const cardPopup = document.getElementById("card-popup");

document.querySelectorAll(".history-perk-card").forEach(element => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		cardPopup.classList.remove("d-none");
		cardPopup.classList.add("d-block");
		blur_background();
	});
});

document.addEventListener('click', (event) => {
	if (!cardPopup.contains(event.target) && !event.target.matches('.history-perk-card')) {
		event.stopPropagation();
		cardPopup.classList.add("d-none");
		cardPopup.classList.remove("d-block");
		unblur_background();
	}
});
