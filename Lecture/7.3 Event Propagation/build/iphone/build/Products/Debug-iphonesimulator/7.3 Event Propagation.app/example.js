var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "vertical"
});

var label = Ti.UI.createLabel({
	text: "Hello World",
	font: {fontSize: 28, fontWeight: "bold"},
	top: 200
});

var view = Ti.UI.createView({
	backgroundColor: "#4F7EC4",
	width: 200,
	height: 75,
	borderRadius: 20,
	top: 100
});

win.add(label, view);

win.addEventListener("click", function(event){
	//console.log(this.children[0].text);
	console.log(event.source.backgroundColor);
});

win.open();
