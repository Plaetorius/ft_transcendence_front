

// Open for Chats
document.querySelectorAll(".chats-profile").forEach(element => {
    element.addEventListener('click', (event) => {
        event.stopPropagation();
		profilePopup.classList.remove("d-none");
		profilePopup.classList.add("d-block");
		blur_background();
	});
});

// Close for Chats
document.addEventListener('click', (event) => {
    if (!profilePopup.contains(event.target) && !event.target.matches('.chats-profile')) {
        event.stopPropagation();
		profilePopup.classList.add("d-none");
		profilePopup.classList.remove("d-block");
		unblur_background();
	}
});

// TODO i probably don't need a popup opener per section
// just give a common class name 

const chatPopup = document.getElementById("chat-popup");

// Open for Chats
document.querySelectorAll(".open-chat").forEach(element => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		chatPopup.classList.remove("d-none");
		chatPopup.classList.add("d-block");
		blur_background();
	});
});

// Close for Chats
document.addEventListener('click', (event) => {
	if (!profilePopup.contains(event.target) && !event.target.matches('.open-chat')) {
		event.stopPropagation();
		chatPopup.classList.add("d-none");
		chatPopup.classList.remove("d-block");
		unblur_background();
	}
});

