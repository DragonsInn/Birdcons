var gen = require("webfonts-generator");
var conf = require("./Birdcons.font");
var path = require("path");

var fontconf = {
    files: conf.files,
    dest: "./dist",
    fontName: conf.fontName,
    cssFontsPath: "",
    html: true,
    htmlDest: "./dist/demo.html",
    templateOptions: {
    	classPrefix: conf.classPrefix,
    	baseClass: conf.baseClass
    },
    types: ["svg", "ttf", "woff", "eot"],
    order: ["svg", "ttf", "woff", "eot"],
    rename: function(fileName) {
        return path.basename(fileName, ".svg");
    }
};

gen(fontconf,function(err,res){
    if(err) {
        console.log("An error occured: "+err);
    } else {
        console.log("Birdcons were built successfuly.");
    }
});
