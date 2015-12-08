var swipeWin = Ti.UI.createWindow({
	backgroundColor: "black"
});


//array before for loop
viewContainer = [];

for(var i=0; i<gallery.length; i++){
	var imageView = Ti.UI.createImageView({
		image: "images/" + gallery[i],
		width: "100%"
	});
	//wrapper
	var imgWrapper = Ti.UI.createScrollView({
		maxZoomScale: 5,
	});
	
	imgWrapper.add(imageView);
	viewContainer.push(imgWrapper);
}

var swipeView = Ti.UI.createScrollableView({
   views: viewContainer,
   //showPagingControl:true,
   maxZoomScale: 4.0,
   //width: "100%",
   bottom: 40 
});

var closeButton = Ti.UI.createView({
	backgroundColor: "black",
	height: 40,
	bottom: 0
});

var closeLabel = Ti.UI.createLabel({
	text: "Close",
	color: "white"
});

swipeWin.add(swipeView);
closeButton.add(closeLabel);
swipeWin.add(closeButton);

closeButton.addEventListener("click", function(){
	swipeWin.close();
});

exports.swipeWin = swipeWin;