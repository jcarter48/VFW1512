var win = Titanium.UI.createWindow({
	backgroundColor: "#fff",
	backgroundImage: "background.jpg"
});

var data = require("data");


var names = Titanium.UI.createLabel({
	text: "Kindred",
	color: "#fff",
	top: 80,
	font: {fontSize: "80px", fontFamily: "Verdana-Bold"}
});

var characters = Titanium.UI.createView({
	backgroundImage:"Kindred.png",
	width: 150,
	height: 150,
	top: 190,
	borderColor: "#fff",
	borderWidth: 5
	//want to add border cant get it to work with illustrator or code
	//characterArray : ["Bard", "Kindred", "Gnar", "Lulu", "Nami", "Thresh"]
});

var description = Titanium.UI.createLabel({
	text: "Separate, but never parted, Kindred represents the twin essences of death. Lamb’s bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his crushing jaws. Though interpretations of Kindred’s nature vary across Runeterra, every mortal must choose the true face of their death.",
	color: "#fff",
	right: 24,
	left: 24,
	font: {fontSize: "15px", fontFamily: "Verdana-Bold"},
	bottom: 110
});

var descBox = Ti.UI.createView({
	backgroundColor: "#fff",
	left: 20,
	right: 20,
	top: 355,
	bottom: 100,
	opacity: .50,
});

var back = Titanium.UI.createView({
	backgroundImage:"back_button.png",
	width: 50,
	height: 50,
	left: 25,
	bottom: 40
});

var forward = Titanium.UI.createView({
	backgroundImage:"forward_button.png",
	width: 50,
	height: 50,
	right: 25,
	bottom: 40
});

//back.addEventListener("click",);
//forward.addEventListener("click",);
win.add(names, characters, description, descBox, back, forward);
win.open();