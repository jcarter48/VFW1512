//function for detail window
var detail = function(source){
	//detail win
	var detailWin = Ti.UI.createWindow({
		backgroundColor: "#ececec",
		title: "Additional Info"
	});
	//champion name
	var detailLabel = Ti.UI.createLabel({
		text: source.title,
		top: 40,
		color: "#000000	",
		font: {fontSize: 40, fontFamily: "AmericanTypewriter"}
	});
	//champion picture
	var detailImage = Ti.UI.createImageView({
		width: 100,
		height: 100,
		top: 90,
	});
	//getting correct images for tableView & listView
	if(source.leftImage) {
		detailImage.image = source.leftImage;
		}else{ 
    	detailImage.image = source.image;
		};
	
	//champion description
	var detailDesc = Ti.UI.createLabel({
		text: source.desc,
		top: 200,
		left: 20,
		right: 20,
		color: "#000000",
		font: {fontSize: 18, fontFamily: "AmericanTypewriter"}
	});
	
	//adding them all to detailWin
	detailWin.add(detailLabel, detailImage, detailDesc);
	
	//opening detailWin with nav
	nav.openWindow(detailWin);
};

//exporting
exports.detail = detail;