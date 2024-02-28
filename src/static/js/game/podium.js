// Open for Podium
document.querySelectorAll(".podium-profile").forEach(element => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		profilePopup.classList.remove("d-none");
		profilePopup.classList.add("d-block");
		blur_background();
	});
});

// Close for Podium
document.addEventListener('click', (event) => {
	if (!profilePopup.contains(event.target) && !event.target.matches('.podiun-profile')) {
		event.stopPropagation();
		profilePopup.classList.add("d-none");
		profilePopup.classList.remove("d-block");
		unblur_background();
	}
});