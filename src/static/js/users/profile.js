const profilePopup = document.getElementById("profile-popup");

document.querySelectorAll(".history-profile-picture").forEach(element => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		profilePopup.classList.remove("d-none");
		profilePopup.classList.add("d-block");
		blur_background();
	});
});


// TODO check if clicked element isn't a button within the popup
document.addEventListener('click', (event) => {
	if (!profilePopup.contains(event.target) && !event.target.matches('.history-profile-picture')) {
		event.stopPropagation();
		profilePopup.classList.add("d-none");
		profilePopup.classList.remove("d-block");
		unblur_background();
	}
});


// TODO remove (for debug)
profilePopup.classList.remove("d-none");
profilePopup.classList.add("d-block");
blur_background();