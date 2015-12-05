var mainWindow = Ti.UI.createWindow({
	backgroundColor: "gray"
});

//TYPICAL SANDBOXING
var foods = ["noodles", "pizza", "salad", "burgers"];


//COMMON JS
//Method #1 for loading external JS, immediately runs code
//require("data");

//Method #2 loads JS as a accessible variable 
var data = require("data");

console.log(data.cities[2]);


var json = require("json");

console.log(json.characters.titles[1]);
console.log(json.characters.desc[1]);

mainWindow.open();