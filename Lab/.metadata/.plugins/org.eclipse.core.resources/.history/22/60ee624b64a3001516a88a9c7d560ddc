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
	//pushing to array
	sectionCollection.push(section);
}

//Eventlistener to open detailWin
table.addEventListener("click", function(event){
	detail.detail(event.source);
});
//setData to array
table.setData(sectionCollection);

tableWin.add(table);
//exporting
exports.tableWin = tableWin;
