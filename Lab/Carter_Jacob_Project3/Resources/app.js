var data = require("data");
var detail = require("detail");

var win = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var table = Ti.UI.createTableView({
	top: 20,
	headerTitle: "Favorite Champions",
});

var categories = ["Top 10 Favorites", "Previous Top 10 Favorites"];

var section1 = Ti.UI.createTableViewSection({
	headerTitle: categories[0]
});

var section2 = Ti.UI.createTableViewSection({
	headerTitle: categories[1]
});


var rowCollection = [];	

for(var i=0; i<10; i++){
	var row1 = Ti.UI.createTableViewRow({
		title: data.data[i].title,
		height: 50,
		leftImage: "images/" + data.data[i].image,
		desc: data.data[i].desc
	});
	row1.addEventListener("click", detail.detail);
	section1.add(row1);
	rowCollection.push(row1);
};


for(var i=10; i<20; i++){
	var row2 = Ti.UI.createTableViewRow({
		title: data.data[i].title,
		height: 50,
		leftImage: "images/" + data.data[i].image,
		desc: data.data[i].desc
	});
	row2.addEventListener("click", detail.detail);
	section2.add(row2);
	rowCollection.push(row2);
};

table.setData([section1, section2]);

win.add(table);
win.open();
