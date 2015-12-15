var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var basicSwitch = Ti.UI.createSwitch({
  value:true,
  top: 300 
});

var sizeSwitch = Ti.UI.createSwitch({
  value:true,
  top: 350
});
var label = Ti.UI.createLabel({
	text: "Sample Text",
	color: "#000",
	font: {
		fontSize: "20",
		fontWeight: "bold"
	},
	top: 200
});

win.add(basicSwitch, sizeSwitch, label);

basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
  if(!basicSwitch.value){
  	win.backgroundColor = "#000";
  	label.color = "#fff";
  }else{
  	win.backgroundColor = "fff";
  	label.color = "#000";
  }
});
sizeSwitch.addEventListener("change", function(){
	if(!sizeSwitch.value){
		label.font = {fontSize: 40};
	}else{
		label.font = {fontSize: 20};
	}
});

win.open();

// print initial value
Ti.API.info('Switch value: ' + basicSwitch.value);