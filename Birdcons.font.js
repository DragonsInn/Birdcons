var glob = require("glob").sync;
var path = require("path");

module.exports = {
    fontName: "Birdcons",
    files: glob(path.join(__dirname, "icons/*.svg")),
    baseClass: "birdcon",
    classPrefix: "" // I.e.: <i class="birdcon arrow"></i>
};
