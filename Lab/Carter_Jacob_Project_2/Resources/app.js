var win = Titanium.UI.createWindow({
	backgroundColor: "#fff",
	//backgroundImage:
});

var characters = Titanium.UI.createView({
	backgroundImage:"",
	//characterArray : ["Bard", "Kindred", "Gnar", "Lulu", "Nami", "Thresh"]
});


var names = Titanium.UI.createLabel({
	text: "Bard",
	color: "#fff"
	font = {fontSize: "24px", fontFamily: "Verdana-Bold"},
});

win.add(characters);
win.open();