const profilePopup = document.getElementById("profile-popup");

// Open Profile Popup
document.querySelectorAll(".open-profile").forEach(element => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		hide_popups();
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


const settingsPopup = document.getElementById("settings-popup");

// Open Settings Popup
document.querySelectorAll(".open-settings").forEach(element => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		hide_popups();
		settingsPopup.classList.remove("d-none");
		settingsPopup.classList.add("d-block");
		blur_background();
	});
});

// Close Settings Popup 
document.addEventListener('click', (event) => {
	if (!settingsPopup.contains(event.target) && !event.target.matches('.open-settings')) {
		event.stopPropagation();
		settingsPopup.classList.add("d-none");
		settingsPopup.classList.remove("d-block");
		unblur_background();
	}
});


document.querySelector('.settings-picture').addEventListener('click', function() {
	document.getElementById('profile-picture-input').click();
});


// Handle settings form
const form = document.querySelector('#settings-popup form');
    
form.addEventListener('submit', function(event) {
	event.preventDefault();
	blur_background();


	const formData = new FormData(form);
	const formJSON = {};
	for (const [key, value] of formData.entries()) {
		formJSON[key] = value;
	}
	// Debug code
	const fileInput = document.getElementById('profile-picture-input');
	if (fileInput.files[0]) {
		const reader = new FileReader();
		reader.onloadend = function() {
			const base64String = reader.result;
			console.log('Base64 String:', base64String);
			console.log('Form JSON:', formJSON);
		};
		reader.readAsDataURL(fileInput.files[0]);
	} else {
		console.log('Form JSON:', formJSON);
	}
});