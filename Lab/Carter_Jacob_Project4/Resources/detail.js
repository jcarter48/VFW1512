//detail window function w/button/label/image
var openDetail = function(source){
	//win
	var detailWin = Ti.UI.createWindow({
		backgroundImage: "background.jpg",
		title: "Big Picture"
	});
	//button
	var detailButton = Ti.UI.createView({
		backgroundColor: "#000000",
		width: 330,
		height: 75,
		top: 30,
		borderWidth: 5,
		borderColor: "#ffffff"
	});
	//label
	var detailLabel = Ti.UI.createLabel({
		text: source.title,
		color: "#ffffff",
		font: {fontSize: 35, fontFamily: "AmericanTypewriter"}
	});
	//imageView
	var detailImage = Ti.UI.createImageView({
		width: 330,
		height: 260,
		top: 120,
		image: source.image,
		borderWidth: 5,
		borderColor: "#ffffff"
	});
	//making label child of button
	detailButton.add(detailLabel);
	//add to win
	detailWin.add(detailButton, detailImage);
	//opening with nav
	nav.openWindow(detailWin);
};

//export
exports.openDetail = openDetail;