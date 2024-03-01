setActiveSection('home');

document.getElementById("header-home").onclick = () => navigateToSection("home");
document.getElementById("header-games").onclick = () => navigateToSection("games");
document.getElementById("header-friends").onclick = () => navigateToSection("friends");
document.getElementById("header-podium").onclick = () => navigateToSection("podium");
document.getElementById("header-chats").onclick = () => navigateToSection("chats");
document.getElementById("header-profile").onclick = () => navigateToSection("my-profile");

function navigateToSection(sectionId) {
	setActiveSection(sectionId);
	history.pushState({section : sectionId}, null, "#" + sectionId);
}

function setActiveSection(sectionId) {
	document.querySelectorAll("main > section").forEach(section => {
		section.style.display = 'none';
	});
	document.getElementById(sectionId).style.display = 'block';
}

