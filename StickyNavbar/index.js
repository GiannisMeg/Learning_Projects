const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

// console.log(navbarEl);
console.log(bottomContainerEl.offsetTop);
console.log(navbarEl.offsetHeight);

window.addEventListener("scroll", () => {
	// console.log(window.scrollY);

	// 50 is the margin we added in the css in the text class
	if (
		window.scrollY >
		bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
	) {
		// add class active
		navbarEl.classList.add("active");
	} else {
		// remove class active
		navbarEl.classList.remove("active");
	}
});
