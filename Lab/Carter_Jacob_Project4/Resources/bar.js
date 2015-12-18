//require
var data = require("data");

//window
var tabbedWin = Ti.UI.createWindow({
	backgroundImage: "background.jpg",
	title: "pls work",
	layout: "vertical"
});

//tabbedBar
var tabbedBar = Titanium.UI.iOS.createTabbedBar({
    labels:['TSM', 'C9', 'IMT', 'NRG'],
    backgroundColor:'#ffffff',
    top:20,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200,
    index: 0
});

//table
var table = Ti.UI.createTableView({
	top: 20,
	height: 248
});

//array for data
var sectionCollection = [];
//for loop for table sections/tablerows
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

//eventllistener for tabbedBar to switch teams
tabbedBar.addEventListener("click", function(e){
	table.setData([sectionCollection[e.index]]);
});

//setting tableData
table.setData([sectionCollection[0]]);

//adding to window
tabbedWin.add(tabbedBar, table);

//export
exports.tabbedWin = tabbedWin;