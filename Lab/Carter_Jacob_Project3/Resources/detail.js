var detail = function(source){
	var detailWin = Ti.UI.createWindow({
		backgroundColor: "#ececec"
		//layout: "vertical",
		//modal: true
	});
	// var nav =Ti.UI.iOS.createNavigationWindow({
	// window: detailWin
	// });
	var detailImage = Ti.UI.createImageView({
		width: 100,
		height: 100,
		top: 90,
		image: source.leftImage
		//^leftImage gets tableViews images, image gets listViews images.
		//how can i get them both to work?
		//cant figure it out will wait to ask oscar
	});
	var detailLabel = Ti.UI.createLabel({
		text: source.title,
		top: 40,
		color: "#000000	",
		font: {fontSize: 40, fontFamily: "AmericanTypewriter"}
	});
	var detailDesc = Ti.UI.createLabel({
		text: source.desc,
		top: 200,
		left: 20,
		right: 20,
		color: "#000000",
		font: {fontSize: 18, fontFamily: "AmericanTypewriter"}
	});
	detailWin.add(detailImage, detailLabel, detailDesc);
	
	detailWin.addEventListener("click", function(){
		detailWin.close();
	});
	//nav.open();
	//navigation window not going back to tableview/listview
	//tried everything i can think of just going to wait to ask oscar
	detailWin.open();
};

exports.detail = detail;