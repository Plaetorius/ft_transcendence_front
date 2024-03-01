const chatPopup = document.getElementById("chat-popup");

// Open for Chats
document.querySelectorAll(".open-chat").forEach(element => {
	element.addEventListener('click', (event) => {
		event.stopPropagation();
		chatPopup.classList.remove("d-none");
		chatPopup.classList.add("d-block");
		blur_background();
		scrollToLastMessages();
	});
});

// Close for Chats
document.addEventListener('click', (event) => {
    if (!chatPopup.contains(event.target) && !event.target.matches('.open-chat')) {
        event.stopPropagation();
        chatPopup.classList.add("d-none");
        chatPopup.classList.remove("d-block");
        unblur_background();
    }
});

function scrollToLastMessages() {
    const chatMessages = document.querySelector('.chat-messages');
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
