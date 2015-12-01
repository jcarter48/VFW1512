//Filler Text
//http://meettheipsums.com 

//iOS Fonts
//http://iosfonts.com 

var win = Titanium.UI.createWindow({
	backgroundColor: "#fff"
});

var redView = Titanium.UI.createView({
	backgroundColor: "red",
	width: 200,
	height: 200,
	zIndex: 1,
	bottom: 0,
	right: 0
});

var blueView = Titanium.UI.createView({
	backgroundColor: "blue",
	//width: 200,
	//height: 200,
	top: 50,
	bottom: 50,
	left: 50,
	right: 50,
	borderColor: "black",
	borderWidth: 10
});

var greenView = Titanium.UI.createView({
	backgroundColor: "green",
	backgroundImage: "6F6eAzr.png",
	width: 200,
	height: 200,
	borderRadius: 100
});

var label = Titanium.UI.createLabel({
	text: "ðŸ” Hello World!",
	color: "#fff"
});

win.add(redView, blueView, greenView, label);

win.open();
