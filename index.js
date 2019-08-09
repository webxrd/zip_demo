
var fs = require("fs");
var zip = require("node-native-zip");
var tools = require("../tools");

var archive = new zip();

archive.addFiles([
    { name: "xrddd.png", path: "./static/xrd.png" },
    { name: "结构111.txt", path: "./static/结构1.txt" }
], function (err) {
    if (err) return console.log("err while adding files", err);
    console.log('archive___archive___archive___archive___archive___archive___');
    console.log(archive);
    var buff = archive.toBuffer();
    fs.writeFile("./", buff, function (err, data) {
        console.log("data___data___data___data___data___data___data___");
        console.log(data);
        console.log("Finished");
    });
});
// tools.createDir('temp4');