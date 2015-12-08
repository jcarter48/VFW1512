var swipe = require("swipe");

var win = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var openButton = Ti.UI.createView({
	backgroundColor: "blue",
	borderRadius: 20,
	width: 100,
	height: 100
});
	
win.add(openButton);
openButton.addEventListener("click", function(){
	swipe.swipeWin.open();
});


//win.open();
//will make first one to open if comment out win.open();
swipe.swipeWin.open();