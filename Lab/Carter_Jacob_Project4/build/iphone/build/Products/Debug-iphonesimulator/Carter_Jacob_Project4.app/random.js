var data = require("data");

var galleryFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"images");
var gallery = galleryFolder.getDirectoryListing();

var min = 0;
var max = 19;

function randomizer(min, max) {
    var randomNum = Math.round(Math.random() *(max-min) +Number(min));
    return randomNum;
}

var randomWin = Ti.UI.createWindow({
	backgroundImage: "background.jpg",
	title: "Random Player!"
});
var randomButton = Ti.UI.createView({
	backgroundColor: "#000000",
	width: 200,
	height: 75,
	top: 30,
	borderWidth: 5,
	borderColor: "#ffffff"
});
var randomLabel = Ti.UI.createLabel({
	text: "Shuffle",
	color: "#ffffff",
	font: {fontSize: 25}
});
var randomImage = Ti.UI.createImageView({
	width: 330,
	height: 260,
	top: 120,
	image: "images/" + gallery[0],
	borderWidth: 5,
	borderColor: "#ffffff"
});

randomButton.addEventListener("singletap", function(){
	var ranNum = randomizer(min, max);
	randomImage.Image = "images/" + gallery[ranNum];
});

randomButton.add(randomLabel);
randomWin.add(randomButton, randomImage);

exports.randomWin = randomWin;