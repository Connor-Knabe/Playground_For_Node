var fs = require('fs');

var file = fs.createReadStream("input.txt");
var newFile = fs.createWriteStream("output.txt");



file.pipe(newFile);