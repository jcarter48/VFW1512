var win = Titanium.UI.createWindow({
	backgroundColor: "#fff",
	backgroundImage: "background.jpg"
});

var data = require("data");
//console.log(data.characters.names[]);
//Functionality
var counter = 0;
var wasClicked = function(){
	counter++;
	names.text = counter;
};
var previous = function(){
	if (counter <= 0){
		counter = data.characters.names.length-1;
	}else{
		counter--;
	};
	names.text = data.characters.names[counter];
};
var next = function(){
	if (counter >= data.characters.names.length-1){
		counter = 0;
	}else{
		counter++;
	};
	names.text = data.characters.names[counter];
};


//Labels and Views
var names = Titanium.UI.createLabel({
	text: data.characters.names.characters,
	color: "#fff",
	top: 80,
	font: {fontSize: "80px", fontFamily: "Verdana-Bold"}
});

var characters = Titanium.UI.createView({
	backgroundImage: data.characters.portrait[0],
	width: 150,
	height: 150,
	top: 190,
	borderColor: "#fff",
	borderWidth: 5
	//want to add border cant get it to work with illustrator or code
	//characterArray : ["Bard", "Kindred", "Gnar", "Lulu", "Nami", "Thresh"]
});

var description = Titanium.UI.createLabel({
	text: data.characters.desc[0],
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

back.addEventListener("click", previous);
forward.addEventListener("click", next);
win.add(names, characters, description, descBox, back, forward); 
win.open();