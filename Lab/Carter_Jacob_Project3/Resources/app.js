var data = require("data");
var detail = require("detail");
		
var win = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var tableWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "TableView"
});

var listWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "ListView"
});

var nav =Ti.UI.iOS.createNavigationWindow({
	window: win
});

//BUTTONS
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
			leftImage: "images/" + data.data[n][i].image,
			desc: data.data[n][i].desc,
			hasChild: true
		});
		section.add(row);
	}
	sectionCollection1.push(section);
}

table.addEventListener("click", function(event){
	detail.detail(event.source);
	//console.log(this);
});

//LIST
var list = Ti.UI.createListView({
	top: 20,
	headerTitle: "Favorite Champions",
	defaultItemTemplate: Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE,
});

// var titles = [
	// {headTitle: "Top 20 Favorites"},
	// //{headTitle: "Top 10 Favorites"},
	// //{headTitle: "Previous Top 10 Favorites"}
	// //not sure how to seperate my data to use sections properly for listView
	// //cant figure it out will ask oscar
// ];

var sectionCollection2 = [];
for(n in data.listData){
	var section = Ti.UI.createListSection({
		headerTitle: n
	});
	for(var i = 0; i<data.listData[n].length; i++){
		section.setItems(data.listData[n]);
	};
	sectionCollection2.push(section);
	list.addEventListener("itemclick", function(event){
	detail.detail(event.source.sections[event.sectionIndex].items[event.itemIndex].properties);
	//console.log(this);
	//opening two nav detail windows?
});
}

list.setSections(sectionCollection2);
table.setData(sectionCollection1);

tableButton.add(tableButtonLabel);
listButton.add(listButtonLabel);

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
