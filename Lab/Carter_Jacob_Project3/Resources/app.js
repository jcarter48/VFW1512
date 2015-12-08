//images
var galleryFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"images");
var gallery = galleryFolder.getDirectoryListing();
var swipe = require("swipe");

Ti.UI.setBackgroundColor("fff");
var win = Ti.UI.createWindow({
	backgroundImage: "background.jpg",
	top: 20
});

//ScrollView
var scrollView = Ti.UI.createScrollView({
	layout: "horizontal",
	contentWidth: 300,
	top: 28,
	showVerticalScrollIndicator: true
});




//bottom, left here and top in scrollview are the same so there is even empty space everywhere!
for(var i=0; i<gallery.length; i++){
	var imageView = Ti.UI.createImageView({
		image: "images/" + gallery[i],
		width:160,
		height: 90,
		bottom: 28,
		//left: 28,
		borderColor: "#fff",
		borderWidth: 1
	});
	scrollView.add(imageView);
}

scrollView.addEventListener("click", function(){
	swipe.swipeWin.open();
});
win.add(scrollView);
win.open();
