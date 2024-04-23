var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background +";";
}

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background +";";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var button = document.createElement("button");
button.appendChild(document.createTextNode("Random"));
button.addEventListener("click", function() {
	var randomNumber1 = Math.floor(Math.random() * 256);
	var randomNumber2 = Math.floor(Math.random() * 256);
	var randomNumber3 = Math.floor(Math.random() * 256);
	var randomNumber4 = Math.floor(Math.random() * 256);
	var randomNumber5 = Math.floor(Math.random() * 256);
	var randomNumber6 = Math.floor(Math.random() * 256);
	var random1 = "rgb" + "(" + randomNumber1 + "," + randomNumber2 + "," + randomNumber3 +")";
	var random2 = "rgb" + "(" + randomNumber4 + "," + randomNumber5 + "," + randomNumber6 +")";
	body.style.background = "linear-gradient(to right, "+random1+", "+random2+")";

	css.textContent = body.style.background +";";
})
body.appendChild(button);