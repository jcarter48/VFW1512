var detail = function(){
	var detailWin = Ti.UI.createWindow({
		backgroundColor: "#fff"
		//layout: "vertical",
		//modal: true
	});
	var detailImage = Ti.UI.createImageView({
		width: 100,
		height: 100,
		top: 40,
		image: this.leftImage
	});
	var detailLabel = Ti.UI.createLabel({
		text: this.desc,
		top: 150,
		left: 20,
		right: 20
	});
	detailWin.add(detailImage, detailLabel);
		detailWin.addEventListener("click", function(){
		detailWin.close();
	});
	detailWin.open();
};

exports.detail = detail;