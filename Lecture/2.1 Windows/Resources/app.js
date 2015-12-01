//OPTIONAL
Titanium.UI.setBackgroundColor('#000');
//http://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions 

//SUPPORTED COLORS //http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI 

var mainWindow = Titanium.UI.createWindow({  
    title:'My First Window',
    backgroundColor:'#fff',
    backgroundImage: "astronaut.jpg",
    //backgroundImage: "pattern.png",
    //backgroundRepeat: true,

    //modal: true,
    //width: 250,
    //height: 250
});

mainWindow.open();