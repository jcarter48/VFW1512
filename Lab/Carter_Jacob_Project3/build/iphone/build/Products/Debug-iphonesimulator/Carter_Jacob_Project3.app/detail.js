var detail = function(source){
	var detailWin = Ti.UI.createWindow({
		backgroundColor: "#fff"
		//layout: "vertical",
		//modal: true
	});
	var nav =Ti.UI.iOS.createNavigationWindow({
	window: detailWin
	});
	var detailImage = Ti.UI.createImageView({
		width: 100,
		height: 100,
		top: 90,
		image: source.leftImage
	});
	var detailLabel = Ti.UI.createLabel({
		text: source.title,
		top: 40,
		font: {fontSize: 40}
	});
	var detailDesc = Ti.UI.createLabel({
		text: source.desc,
		top: 200,
		left: 20,
		right: 20
	});
	detailWin.add(detailImage, detailLabel, detailDesc);
	
	detailWin.addEventListener("click", function(){
		detailWin.close();
	});
	
	win.open();
	
};

exports.detail = detail;