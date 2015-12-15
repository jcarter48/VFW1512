//requires
var table = require("table");
var list = require("list");

//window	
var win = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

//navigation window
var nav =Ti.UI.iOS.createNavigationWindow({
	window: win
});

//Buttons & their Labels
var tableButton = Ti.UI.createView({
	backgroundColor: "#ececec",
	width: 200,
	height: 75,
	top: 200,
	borderWidth: 5
});
var tableButtonLabel = Ti.UI.createLabel({
	text: "TableView",
	font: {fontSize: 25}
});
var listButton = Ti.UI.createView({
	backgroundColor: "#ececec",
	width: 200,
	height: 75,
	bottom: 200,
	borderWidth: 5	 
});
var listButtonLabel = Ti.UI.createLabel({
	text: "ListView",
	font: {fontSize: 25}
});

//Adding Labels to the Buttons
tableButton.add(tableButtonLabel);
listButton.add(listButtonLabel);

//Adding Buttons to the Window
win.add(tableButton, listButton);

//Adding EventListeners to button to open up tableView/listView
tableButton.addEventListener("click", function(){
	nav.openWindow(table.tableWin);
});
listButton.addEventListener("click", function(){
	nav.openWindow(list.listWin);
});

//Opening nav; replaces win.open();
nav.open();
