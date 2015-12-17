var data = require("data");

var tabbedWin = Ti.UI.createWindow({
	backgroundColor: "#ececec",
	title: "pls work"
});

var tabbedBar = Titanium.UI.iOS.createTabbedBar({
    labels:['TSM', 'C9', 'IMT', 'NRG'],
    backgroundColor:'#336699',
    top:20,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200
});

var table = Ti.UI.createTableView({
	top: 60
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
//index instead of number
tabbedBar.addEventListener("click", function(e){
	table.setData([sectionCollection[e.index]]);
});

tabbedWin.add(tabbedBar, table);

exports.tabbedWin = tabbedWin;