Ti.UI.setBackgroundColor("#fff");

var win = Ti.UI.createWindow({
	backgroundColor: "#f2f2f2",
	top: 20
});

/*var gallery = [
	"bmKalista.jpg",
	"dinoGnar.jpg",
	"dsBraum.jpg",
	"yasuo.jpg"
];
*/
var galleryFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"photos");
var gallery = galleryFolder.getDirectoryListing();

for(var i=0; i<gallery.length; i++){
	console.log("photos/" + gallery[i]);
	
	var theImage = Ti.UI.createImageView({
		image: "photos/" + gallery[i],
		width:100,
		height: 100,
		top: 130*i
	});
	win.add(theImage);
}

/*var image1 = Ti.UI.createImageView({
	image: "photos/" + gallery[0]
});

var image2 = Ti.UI.createImageView({
	image: "photos/" + gallery[1]
});*/

win.open();
