var data = require("data");
var detail = require("detail");
var table = require("table");
var list = require("list");
		
var win = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var tableWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var listWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var nav =Ti.UI.iOS.createNavigationWindow({
	window: win
});

//BUTTONS
var tableButton = Ti.UI.createView({
	backgroundColor: "#ececec",
	width: 200,
	height: 75,
	top: 200
});

var listButton = Ti.UI.createView({
	backgroundColor: "#ececec",
	width: 200,
	height: 75,
	bottom: 200
});

//TABLE
var table = Ti.UI.createTableView({
	top: 20,
	headerTitle: "Favorite Champions",
});
var sectionCollection1 = [];
for(n in data.data){
	var section = Ti.UI.createTableViewSection({
		headerTitle: n
	});
	for(var i = 0; i<data.data[n].length; i++){
		var row = Ti.UI.createTableViewRow({
			title: data.data[n][i].title,
			leftImage: "images/" + data.data[n][i].image
		});
		section.add(row);
		row.addEventListener("click", detail.detail);
	}
	sectionCollection1.push(section);
}
//LIST
var list = Ti.UI.createListView({
	top: 20,
	headerTitle: "Favorite Champions",
	defaultItemTemplate: Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE,
});

var titles = [
	{headTitle: "Top 10 Favorites"},
	{headTitle: "Previous Top 10 Favorites"}
];

var sectionCollection2 = [];
for(var i=0; i<titles.length; i++){
	var section = Ti.UI.createListSection({
		headerTitle: titles[i].headTitle
	});
	section.setItems(data.listData);
	sectionCollection2.push(section);
	section.addEventListener("click", detail.detail);
}

list.sections = sectionCollection2;
table.setData(sectionCollection1);

win.add(tableButton, listButton);
tableButton.addEventListener("click", function(){
	//tableWin.open();
	nav.openWindow(tableWin);
	tableWin.add(table);
});
listButton.addEventListener("click", function(){
	//listWin.open();
	nav.openWindow(listWin);
	listWin.add(list);
});
nav.open();
