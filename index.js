const myBoxes = document.querySelectorAll(".my-container div");
const AIBoxes = document.querySelectorAll(".AI-container div");
let aiType;
let ranItem;
myBoxes[2].addEventListener("animationend", () => {
	const ranNum = Math.floor(Math.random() * 3);
	myBoxes.forEach((box) => {
		box.addEventListener("click", ifFunc);
	});
	ranItem = AIBoxes[ranNum];
	aiType = ranItem.dataset.type;
	console.log(aiType);
});

function ifFunc() {
	let myItem = this;
	let type = myItem.dataset.type;
	if (type == "rock" && aiType == "pape") {
		ranItem.style.animation = "uWin 1s linear backwards";
		ranItem.addEventListener("animationend", () => window.location.reload());
	} else if (type == "pape" && aiType == "maka") {
		ranItem.style.animation = "uWin 1s linear backwards";
		ranItem.addEventListener("animationend", () => window.location.reload());
	} else if (type == "maka" && aiType == "rock") {
		ranItem.style.animation = "uWin 1s linear backwards";
		ranItem.addEventListener("animationend", () => window.location.reload());
	} else if (type == "rock" && aiType == "maka") {
		myItem.style.animation = "uWin 1s linear backwards";
		myItem.addEventListener("animationend", () => window.location.reload());
	} else if (type == "maka" && aiType == "pape") {
		myItem.style.animation = "uWin 1s linear backwards";
		myItem.addEventListener("animationend", () => window.location.reload());
	} else if (type == "pape" && aiType == "rock") {
		myItem.style.animation = "uWin 1s linear backwards";
		myItem.addEventListener("animationend", () => window.location.reload());
	} else if (type == aiType) {
		myItem.style.animation = "uWin 1s linear backwards";
		ranItem.style.animation = "uWin 1s linear backwards";
		myItem.addEventListener("animationend", () => window.location.reload());
	}
	myItem.style.transform = "translateY(-50px)";
	ranItem.style.transform = "translateY(50px)";
}
