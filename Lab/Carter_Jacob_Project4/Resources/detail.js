var openDetail = function(source){
	var detailWin = Ti.UI.createWindow({
		backgroundImage: "background.jpg",
		title: "Big Picture"
	});
	var detailButton = Ti.UI.createView({
		backgroundColor: "#000000",
		width: 330,
		height: 75,
		top: 30,
		borderWidth: 5,
		borderColor: "#ffffff"
	});
	var detailLabel = Ti.UI.createLabel({
		text: source.title,
		color: "#ffffff",
		font: {fontSize: 35, fontFamily: "AmericanTypewriter"}
	});
	var detailImage = Ti.UI.createImageView({
		width: 330,
		height: 260,
		top: 120,
		image: source.image,
		borderWidth: 5,
		borderColor: "#ffffff"
	});
	detailButton.add(detailLabel);
	detailWin.add(detailButton, detailImage);
	nav.openWindow(detailWin);
};

exports.openDetail = openDetail;