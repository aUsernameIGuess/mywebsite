function toggleMenu() {
	var menu = document.getElemenById("dropdownMenu");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}
