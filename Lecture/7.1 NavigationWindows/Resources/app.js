var table = require("table");
var list = require("list");
		
var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "My App"
});

var nav =Ti.UI.iOS.createNavigationWindow({
	window: win
});

var tableButton = Ti.UI.createView({
	backgroundColor: table.tableWin.backgroundColor,
	width: 200,
	height: 75,
	top: 200
});

var listButton = Ti.UI.createView({
	backgroundColor: list.listWin.backgroundColor,
	width: 200,
	height: 75,
	bottom: 200
});



win.add(tableButton, listButton);
tableButton.addEventListener("click", function(){
	//table.tableWin.open();
	nav.openWindow(table.tableWin);
});
listButton.addEventListener("click", function(){
	//list.listWin.open();
	nav.openWindow(list.listWin);
});

nav.open();
