var swipeWin = Ti.UI.createWindow({
	backgroundColor: "black"
});

var view1 = Ti.UI.createView({ backgroundColor:'#123' });
var view2 = Ti.UI.createView({ backgroundColor:'#246' });
var view3 = Ti.UI.createView({ backgroundColor:'#48b' });

var swipeView = Ti.UI.createScrollableView({
  views:[view1,view2,view3],
  showPagingControl:true,
  bottom: 40
});

var closeButton = Ti.UI.createView({
	backgroundColor: "black",
	height: 40,
	bottom: 0
});

var closeLabel = Ti.UI.createLabel({
	text: "CLOSE",
	color: "white"
});

swipeWin.add(swipeView);
closeButton.add(closeLabel);
swipeWin.add(closeButton);

closeButton.addEventListener("click", function(){
	swipeWin.close();
});

exports.swipeWin = swipeWin;