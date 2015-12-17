var random = require("random");
var list = require("list");
var bar = require("bar");

//window	
var win = Ti.UI.createWindow({
	backgroundImage: "background.jpg"
});

//navigation window
var nav =Ti.UI.iOS.createNavigationWindow({
	window: win
});

//Buttons & their Labels
var randomButton = Ti.UI.createView({
	backgroundColor: "#ffffff",
	width: 200,
	height: 75,
	top: 150,
	borderWidth: 5
});
var randomButtonLabel = Ti.UI.createLabel({
	text: "Random Image",
	font: {fontSize: 25, fontFamily: "AmericanTypewriter"}
});
var listButton = Ti.UI.createView({
	backgroundColor: "#ffffff",
	width: 200,
	height: 75,
	top: 250,
	borderWidth: 5 
});
var listButtonLabel = Ti.UI.createLabel({
	text: "ListView",
	font: {fontSize: 25, fontFamily: "AmericanTypewriter"}
});
var barButton = Ti.UI.createView({
	backgroundColor: "#ffffff",
	width: 200,
	height: 75,
	top: 350,
	borderWidth: 5	 
});
var barButtonLabel = Ti.UI.createLabel({
	text: "TabbedBar",
	font: {fontSize: 25, fontFamily: "AmericanTypewriter"}
});

randomButton.add(randomButtonLabel);
listButton.add(listButtonLabel);
barButton.add(barButtonLabel);

win.add(randomButton, listButton, barButton);
randomButton.addEventListener("click", function(){
	nav.openWindow(random.randomWin);
});
listButton.addEventListener("click", function(){
	nav.openWindow(list.listWin);
});
barButton.addEventListener("click", function(){
	nav.openWindow(bar.tabbedWin);
});
nav.open();
