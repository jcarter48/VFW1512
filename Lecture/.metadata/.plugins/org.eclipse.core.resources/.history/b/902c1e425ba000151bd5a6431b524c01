Ti.UI.setBackgroundColor("rgba(255,0,255,0.3)");

var win = Ti.UI.createWindow({
	backgroundColor:"#90000000",
	top: 20,
	orientationModes: [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT
	]
});


var galleryFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"photos");
var gallery = galleryFolder.getDirectoryListing();

//dynamic sizing
var pWidth = Ti.Platform.displayCaps.platformWidth;
var itemCount = 8;
var itemsInRow = 2;
var margin = 10;
var trueCanvasWidth = pWidth - (margin*(itemsInRow+1));
var size = trueCanvasWidth/itemsInRow;
//console.log(trueCanvasWidth);
//console.log(pWidth);

var scrollView = Ti.UI.createScrollView({
	layout: "horizontal",
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
	top: margin
});


for(var i=0; i<gallery.length; i++){
	var theImage = Ti.UI.createImageView({
		image: "photos/" + gallery[i],
		width:size,
		bottom: margin,
		left: margin
	});
	scrollView.add(theImage);
}

win.add(scrollView);
win.open();