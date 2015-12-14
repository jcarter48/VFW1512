var detail = require("detail");

var win = Ti.UI.createWindow({
	backgroundColor: "#ececec"
});

//SETTING UP TABLE VIEW
var table = Ti.UI.createTableView({
	headerTitle: "Super Heroes",
	top: 20
});
var section = Ti.UI.createTableViewSection({
	headerTitle: "Villians"
});
var row = Ti.UI.createTableViewRow({
	title: "The Joker",
	hasDetail: true,
	desc: "Friends with Harley Quinn. Also crazy.",
	photo: "joker.png"
});

table.addEventListener("click", function(event){
	detail.getDetail(event.source);
});

section.add(row);
table.setData([section]);

//SETTING UP LIST VIEW
var list = Ti.UI.createListView({
	headerTitle: "Super Heroes",
	top: 20,
	//defaultItemTemplate: Titanium.UI.LIST_ITEM_TEMPLATE_DEFAULT,
	defaultItemTemplate: Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE,
});

var listSection = Ti.UI.createListSection({
	headerTitle: "Heroes"
});

var listData = [
	{properties: {
		title: "Batman",
		color: "blue",
		acessoryType: 1,
		subtitle: "The Dark Knight",
	}},
	{properties: {
		title: "Superman", 
		color: "red",  
		accessoryType: 2, 
		subtitle: "Son of Krypton",
	}},
	{properties: {
		title: "Wonder Woman", 
		accessoryType: 3,
		subtitle: "Amazonian Warrior",
	}}
];

listSection.setItems(listData);
list.setSections([listSection]);

list.addEventListener("itemclick", function(event){
	detail.getDetail(event.source.sections[event.sectionIndex].items[event.itemIndex].properties);
});

//win.add(table);
win.add(list);

//detail.detailWin.open();
win.open();
