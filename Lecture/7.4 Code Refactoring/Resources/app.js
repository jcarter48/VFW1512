Ti.UI.setBackgroundColor("#fff");

var win =Ti.UI.createWindow({
	background: "#fff",
	top: 20
});

var table = Ti.UI.createTableView();

//DATA SET #1
// var people = [
	// "Girls",
	// "Boys"
// ];
// 
// var names = [
	// "Jan",
	// "Kelly",
	// "Phil",
	// "Tim"
// ];

//DATA SET #2
var people = {
	"Girls": [
		{name: "Jane", color: "pink"},
		{name: "Kelly", color: "yellow"},
		{name: "Shelby", color: "orange"},
	],
	"Boys": [
		{name: "Phil", color: "green"},
		{name: "Tim", color: "red"},
		{name: "Rob", color: "blue"},
	]
};

//APPROACH #1
// for(var i=0; i<genders.length; i++){
	// var section = Ti.UI.createTableViewSection({
		// headerTitle: genders[i]
	// });
// }
// 
// for(var i=0; i<names.length; i++){
	// var row = Ti.UI.createTableViewRow({
		// title: names[i]
	// });
// }

//APPROACH #2
var sectionCollection = [];

for(n in people){
	var section = Ti.UI.createTableViewSection({
		headerTitle: n
	});
	for(var i = 0; i<people[n].length; i++){
		var row = Ti.UI.createTableViewRow({
			//object[currentsection][currentRow].property
			title: people[n][i].name,
			backgroundColor: people[n][i].color
		});
		section.add(row);
	}
	sectionCollection.push(section);
}

table.setData(sectionCollection);
win.add(table);
win.open();
