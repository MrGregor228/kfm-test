var menuOpen = document.querySelector(".menu-trigger-open"),
	menuClose = document.querySelector(".menu-trigger-close"),
	menu = document.getElementById('menu');

function showMenu() {
	menuOpen.style.display = "none";
	menuClose.style.display = "block";
	menu.style.display = "block";
	menu.style.opacity = "1";
}
function hideMenu() {
	menuOpen.style.display = "block";
	menuClose.style.display = "none";
	menu.style.display = "none";
	menu.style.opacity = "0";
}
console.log(menuOpen);
console.log(menuClose);