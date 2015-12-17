var openDetail = function(source){
	var detailWin = Ti.UI.createWindow({
		backgroundImage: "background.jpg",
		title: "Big Picture"
	});
	var detailLabel = Ti.UI.createLabel({
		text: source.title,
		top: 40,
		color: "#ffffff",
		font: {fontSize: 40, fontFamily: "AmericanTypewriter"}
	});
	var detailImage = Ti.UI.createImageView({
		width: 330,
		height: 260,
		top: 90,
		image: source.image,
		borderWidth: 5,
		borderColor: "#ffffff"
	});
	detailWin.add(detailLabel, detailImage);
	nav.openWindow(detailWin);
};

exports.openDetail = openDetail;