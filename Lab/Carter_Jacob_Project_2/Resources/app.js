var win = Titanium.UI.createWindow({
	backgroundColor: "#fff",
	backgroundImage: "background.jpg"
});


//connecting to data.js
var data = require("data");


//Functionality
var counter = 0;

var previous = function(){
	if (counter <= 0){
		counter = data.characters.names.length-1;
	}else{
		counter--;
	};
	title.text = data.characters.names[counter];
	pictures.backgroundImage = data.characters.portrait[counter];
	description.text = data.characters.desc[counter];
};

var next = function(){
	if (counter >= data.characters.names.length-1){
		counter = 0;
	}else{
		counter++;
	};
	title.text = data.characters.names[counter];
	pictures.backgroundImage = data.characters.portrait[counter];
	description.text = data.characters.desc[counter];
};


//Labels and Views
var title = Titanium.UI.createLabel({
	text: data.characters.names[0],
	color: "#fff",
	top: 80,
	font: {fontSize: "80px", fontFamily: "Verdana-Bold"}
});

var pictures = Titanium.UI.createView({
	backgroundImage: data.characters.portrait[0],
	width: 150,
	height: 150,
	top: 190,
	borderColor: "#fff",
	borderWidth: 5
});

var description = Titanium.UI.createLabel({
	text: data.characters.desc[0],
	color: "#fff",
	font: {fontSize: "15px", fontFamily: "Verdana-Bold"},
	left: 15,
	right: 15
});

var descBox = Ti.UI.createView({
	backgroundColor: "#50ffffff",
	left: 20,
	right: 20,
	top: 360,
	bottom: 110,
	//opacity: .50,
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


//event listeners, adding text to descbox, adding stuff to window, and opening window
back.addEventListener("click", previous);
forward.addEventListener("click", next);
descBox.add(description);
win.add(title, pictures, descBox, back, forward);
win.open();