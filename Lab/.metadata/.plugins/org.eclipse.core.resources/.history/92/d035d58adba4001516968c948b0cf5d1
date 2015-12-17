var data = require("data");

var listWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "ListView"
});

var list = Ti.UI.createListView({
	top: 20,
	headerTitle: "Favorite North American Teams",
	defaultItemTemplate: Titanium.UI.LIST_ITEM_TEMPLATE_SUBTITLE,
});

var sectionCollection = [];
for(n in data.listData){
	var section = Ti.UI.createListSection({
		headerTitle: n
	});
	for(var i = 0; i<data.listData[n].length; i++){
		section.setItems(data.listData[n]);
	};
	sectionCollection.push(section);
}

list.addEventListener("itemclick", function(event){
	detail.openDetail(event.source.sections[event.sectionIndex].items[event.itemIndex].properties);
});
list.setSections(sectionCollection);
listWin.add(list);

exports.listWin = listWin;