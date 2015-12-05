Ti.UI.setBackgroundColor("eee");
var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	top: 20
});

var viewContainer = Ti.UI.createScrollView({
	//borderColor: "red",
	layout: "horizontal",
	//To Scroll Horizontally, set contentHeight to device size and set contentWidth to larger than device, i.e.
	//contentWidth: 300,
	//contentHeight: 600
	//To Scroll Vertically, set contentWidth to device size, i.e.
	contentWidth: 300,
	showVerticalScrollIndicator: true
	//disablebounce: true
});

for(var i=0; i<20; i++){
	var view = Ti.UI.createView({
		width: 100,
		height: 100,
		backgroundColor: "#DD6255",
		bottom: 10,
		left: 10,
	});
	var label = Ti.UI.createLabel({
		text: i+1,
		color: "#fff"
	});
	view.add(label);
	view.addEventListener("click", function(){
		console.log("Number " +this.children[0].text + " clicked!");
	});
	viewContainer.add(view);
	//win.add(view);
}

win.add(viewContainer);
win.open();
