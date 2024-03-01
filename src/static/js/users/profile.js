const profilePopup = document.getElementById("profile-popup");

// Open Profile Popup
document.querySelectorAll(".open-profile").forEach(element => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		profilePopup.classList.remove("d-none");
		profilePopup.classList.add("d-block");
		blur_background();
	});
});

// Close Profile Popup 
document.addEventListener('click', (event) => {
	if (!profilePopup.contains(event.target) && !event.target.matches('.open-profile')) {
		event.stopPropagation();
		profilePopup.classList.add("d-none");
		profilePopup.classList.remove("d-block");
		unblur_background();
	}
});