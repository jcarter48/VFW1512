var data = require("data");

var tabbedWin = Ti.UI.createWindow({
	backgroundImage: "background.jpg",
	title: "pls work",
	layout: "vertical"
});

var tabbedBar = Titanium.UI.iOS.createTabbedBar({
    labels:['TSM', 'C9', 'IMT', 'NRG'],
    backgroundColor:'#ffffff',
    top:20,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200,
    index: 0
});

var table = Ti.UI.createTableView({
	top: 20,
	height: 248
});

var sectionCollection = [];
for(n in data.listData){
	var section = Ti.UI.createTableViewSection({
		headerTitle: n
	});
	for(var i = 0; i<data.listData[n].length; i++){
		var row = Ti.UI.createTableViewRow({
			title: data.listData[n][i].properties.title,
			leftImage: data.listData[n][i].properties.image,
		});
		section.add(row);
	}
	sectionCollection.push(section);
}

tabbedBar.addEventListener("click", function(e){
	table.setData([sectionCollection[e.index]]);
});

table.setData([sectionCollection[0]]);
tabbedWin.add(tabbedBar, table);

exports.tabbedWin = tabbedWin;