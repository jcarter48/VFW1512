Ti.UI.setBackgroundColor("eee");
var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	top: 20,
	//layout: "composite",
	//layout: "vertical",
	layout: "horizontal"
});

for(var i=0; i<50; i++){
	var view = Ti.UI.createView({
		width: i*10,
		height: 100,
		backgroundColor: "#C65E53",
		//backgroundColor: "#" + (i+2)*5 + "#C65E53",
		borderColor: "#000",
		bottom: 10,
		right: 10,
		left: 10,
		//opacity: i/20
	});
	var label = Ti.UI.createLabel({
		text: i+1,
		color: "#fff"
	});
	view.add(label);
	win.add(view);
}

win.open();
