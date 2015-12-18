//requires
var data = require("data");

//gallery for images
var galleryFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"images");
var gallery = galleryFolder.getDirectoryListing();

//min max for randomizer
var min = 0;
var max = 19;
//randomzier function
function randomizer(min, max) {
    var randomNum = Math.round(Math.random() *(max-min) +Number(min));
    return randomNum;
}

//win
var randomWin = Ti.UI.createWindow({
	backgroundImage: "background.jpg",
	title: "Random Player!"
});
//button
var randomButton = Ti.UI.createView({
	backgroundColor: "#000000",
	width: 330,
	height: 75,
	top: 30,
	borderWidth: 5,
	borderColor: "#ffffff"
});
//label
var randomLabel = Ti.UI.createLabel({
	text: "Shuffle",
	color: "#ffffff",
	font: {fontSize: 35, fontFamily: "AmericanTypewriter"}
});
//imageView
var randomImage = Ti.UI.createImageView({
	width: 330,
	height: 260,
	top: 120,
	image: "images/" + gallery[0],
	borderWidth: 5,
	borderColor: "#ffffff"
});

//eventlistener for button to change the photo to a random photo in my image folder
randomButton.addEventListener("singletap", function(){
	var ranNum = randomizer(min, max);
	randomImage.Image = "images/" + gallery[ranNum];
});

//making label child of button
randomButton.add(randomLabel);
//adding buttons to win
randomWin.add(randomButton, randomImage);

//export
exports.randomWin = randomWin;