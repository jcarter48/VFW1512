//requires
var data = require("data");
var detail = require("detail");

//win
var listWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "ListView"
});

//list
var list = Ti.UI.createListView({
	top: 20,
	headerTitle: "Favorite North American Teams",
	defaultItemTemplate: Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE,
});
//array for data
var sectionCollection = [];
//for loop for list and sections
for(n in data.listData){
	var section = Ti.UI.createListSection({
		headerTitle: n
	});
	for(var i = 0; i<data.listData[n].length; i++){
		section.setItems(data.listData[n]);
	};
	sectionCollection.push(section);
}
//eventlistener to openDetail
list.addEventListener("itemclick", function(event){
	detail.openDetail(event.source.sections[event.sectionIndex].items[event.itemIndex].properties);
});
//setting list data
list.setSections(sectionCollection);
//adding list to win
listWin.add(list);

//export
exports.listWin = listWin;