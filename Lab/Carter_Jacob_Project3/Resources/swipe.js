var swipeWin = Ti.UI.createWindow({
	backgroundColor: "black"
});



//var swipeView = Ti.UI.createScrollableView({
   //views: gallery,
   //showPagingControl:true,
   //bottom: 40 
//});

//array before for loop
viewContainer =[];

for(var i=0; i<gallery.length; i++){
	var images = Ti.UI.createImageView({
		image: "images/" + gallery[i]
	});
	//wrapper
	var imgWrapper = Ti.UI.createScrollableView({
		maxZoomScale: 5,
	});
	
	imgWrapper.add(images);
	swipeWin.add(imgWrapper);
	
	viewContainer.push();
}



//swipeWin.add(swipeView);

exports.swipeWin = swipeWin;