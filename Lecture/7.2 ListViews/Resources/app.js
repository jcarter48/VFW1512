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
	hasDetail: true
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
		height: 20,
		acessoryType: 1,
		subtitle: "The Dark Knight",
		image: "batman.png"
	}},
	{properties: {
		title: "Superman", 
		color: "red", 
		height: 40, 
		accessoryType: 2, 
		subtitle: "Son of Krypton",
		image: "batman.png"
	}},
	{properties: {
		title: "Wonder Woman",
		 
	height: 100, 
		accessoryType: 3,
		subtitle: "Amazonian Warrior",
		image: "batman.png"
	}}
];

listSection.setItems(listData);
list.setSections([listSection]);

//win.add(table);
win.add(list);

win.open();
