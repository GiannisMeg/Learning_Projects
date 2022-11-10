const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
	const colorContainerEl = document.createElement("div");
	colorContainerEl.classList.add("color-container");
	containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
	colorContainerEls.forEach((colorContainerEl) => {
		const newColorCode = randomColor();
		colorContainerEl.style.backgroundColor = "#" + newColorCode;
		colorContainerEl.innerText = "#" + newColorCode;
	});
}

function randomColor() {
	// give the char set to function to pick the ideal combination
	const chars = "0123456789abcdf";
	const colorCodeLength = 6;
	let colorCode = "";

	for (let index = 0; index < codeColorLength; index++) {
		const randomNum = Math.floor(Math.random() * chars.length);
		colorCode += chars.substring(randomNum, randomNum + 1);
	}
	return colorCode;
}
