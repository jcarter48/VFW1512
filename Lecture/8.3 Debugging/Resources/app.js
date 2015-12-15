var imageSrc = [
    "http://3.bp.blogspot.com/-eW44gpLzCeo/T9LJockkACI/AAAAAAAAFtA/1eRAUlPXFB4/s1600/nasa+rover.jpg",
    "http://www.newscientist.com/data/images/ns/cms/dn17334/dn17334-1_500.jpg",
    "http://g.fastcompany.net/multisite_files/codesign/poster/2013/02/1671778-poster-1280-lunar-base-made-with-3d-printing.jpg"
];
var counter = 0;
var change;
var status;
 
var win = Ti.UI.createWindow();
var theImage = Ti.UI.createImageView({
    image: imageSrc[0]
});

win.add(theImage);
win.open();
 
var changeImage = function(){
    if(counter === imageSrc.length-1){
        counter = 0;
        theImage.image = imageSrc[0];
    }else{
        counter++;
        theImage.image = imageSrc[counter];
    }
    console.log (theImage.image);
 };
 
var start = function(){
    alert("Images Started!");
    change = setInterval(changeImage, 1500);
    status = "start";
};
 
var stop = function(){
    alert("Images Stopped!");
    clearInterval(change);
    status = "stop";
};
 
var toggle = function(){
    if(status === "stop"){
        start();
    }else{
        stop();
    }
};
 
win.addEventListener("click", toggle);
start();