var win = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var swipeWin = Ti.UI.createWindow({
	backgroundColor: "orange"
});

var openButton = Ti.UI.createView({
	backgroundColor: "blue",
	borderRadius: 20,
	width: 100,
	height: 100
});

var closeButton = Ti.UI.createView({
	backgroundColor: "gray",
	borderRadius: 20,
	width: 100,
	height: 100
});

var swipeView = Ti.UI.createScrollableView({
	showPagingControl: true,
	backgroundColor: "green"
	});
	
var openSwipe = function(){
	swipeWin.open();
};

var closeSwipe = function(){
	swipeWin.close();
};

win.add(openButton);
swipeWin.add(swipeView);
swipeWin.add(closeButton);
openButton.addEventListener("click", openSwipe);
closeButton.addEventListener("click", closeSwipe);

win.open();