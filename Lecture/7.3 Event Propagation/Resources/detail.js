var getDetail = function(source){
	
	var detailWin = Ti.UI.createWindow({
	backgroundColor: "#ececec"
	});

	var detailLabel = Ti.UI.createLabel({
	text: source.title
	});

	var detailDesc = Ti.UI.createLabel({
		text: source.desc,
		bottom: 300
	});
	detailWin.add(detailLabel, detailDesc);

	//TEMPORARY CLOSE UNTIL WE ADD NAVIGATION WINDOW
	detailWin.addEventListener("click", function(){
		detailWin.close();
	});

	detailWin.open();
};

exports.getDetail = getDetail;

