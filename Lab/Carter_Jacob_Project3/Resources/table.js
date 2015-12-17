//TABLE
var data = require("data");
var detail = require("detail");

//window for tableView
var tableWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "TableView"
});

//creating tableView
var table = Ti.UI.createTableView({
	top: 20,
	headerTitle: "Favorite Champions",
});

//array for table data
var sectionCollection = [];
//for loop for table rows and data
for(n in data.tableData){
	var section = Ti.UI.createTableViewSection({
		headerTitle: n
	});
	for(var i = 0; i<data.tableData[n].length; i++){
		var row = Ti.UI.createTableViewRow({
			title: n,
			leftImage: "images/" + data.tableData[n][i].image,
			desc: data.tableData[n][i].desc,
			hasChild: true
		});
		section.add(row);
	}
	//pushing to array
	sectionCollection.push(section);
}

//Eventlistener to open detailWin
table.addEventListener("click", function(event){
	detail.openDetail(event.source);
});
//setData to array
table.setData(sectionCollection);
//adding table to tableWin
tableWin.add(table);

//Exporting
exports.tableWin = tableWin;
