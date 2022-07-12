// navbar
window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
	}
	 else {
		header.classList.remove("navbar-fixed");
	}
};

// hamburger
const hambugerElement = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hambugerElement.addEventListener("click", function () {
	hambugerElement.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});
