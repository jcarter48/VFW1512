//LIST
var data = require("data");
var detail = require("detail");

//window for listView
var listWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "ListView"
});

//creating listView
var list = Ti.UI.createListView({
	top: 20,
	headerTitle: "Favorite Champions",
	defaultItemTemplate: Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE,
});

//array for list data
var sectionCollection = [];
//for loop for list sections and data
for(n in data.listData){
	var section = Ti.UI.createListSection({
		headerTitle: n
	});
	for(var i = 0; i<data.listData[n].length; i++){
		section.setItems(data.listData[n]);
	};
	//pushing to array
	sectionCollection.push(section);
}

//Eventlistener to open detailWin
list.addEventListener("itemclick", function(event){
	detail.detail(event.source.sections[event.sectionIndex].items[event.itemIndex].properties);
});
//setSections to array
list.setSections(sectionCollection);

listWin.add(list);
//exporting
exports.listWin = listWin;