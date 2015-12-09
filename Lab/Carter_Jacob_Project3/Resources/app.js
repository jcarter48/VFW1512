//images
var galleryFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"images");
var gallery = galleryFolder.getDirectoryListing();
var swipe = require("swipe");

//dynamic sizing
var pWidth = Ti.Platform.displayCaps.platformWidth;
var itemCount = 26;
var itemsInRow = 2;
var margin = 10;
var trueCanvasWidth = pWidth - (margin*(itemsInRow+1));
var size = trueCanvasWidth/itemsInRow;
//console.log(trueCanvasWidth);
//console.log(pWidth);

//win
Ti.UI.setBackgroundColor("fff");

var win = Ti.UI.createWindow({
	backgroundImage: "background.jpg",
	top: 20
});

//ScrollView
var scrollView = Ti.UI.createScrollView({
	layout: "horizontal",
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
	top: margin,
});


//bottom, left here and top in scrollview are the same so there is even empty space everywhere!
for(var i=0; i<gallery.length; i++){
	var imageView = Ti.UI.createImageView({
		image: "images/" + gallery[i],
		width:size,
		bottom: margin,
		left: margin,
		borderColor: "#fff",
		borderWidth: 1,
		id: i
		//id is for identifying what you clicked on
	});
	scrollView.add(imageView);
	imageView.addEventListener("click", function(){
	//using id to open what you clicked on
	swipe.swipeView.currentPage = this.id;
	swipe.swipeWin.open();
	//console.log(this.id);
});
}

win.add(scrollView);
win.open();
