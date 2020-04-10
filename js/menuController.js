var menuOpen = document.querySelector(".menu-trigger-open"),
	menuClose = document.querySelector(".menu-trigger-close");

function showMenu() {
	menuOpen.style.display = "none";
	menuClose.style.display = "block";
}
function hideMenu() {
	menuOpen.style.display = "block";
	menuClose.style.display = "none";
}
console.log(menuOpen);
console.log(menuClose);