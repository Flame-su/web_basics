// var fs = require("fs");
// var data = fs.readFileSync('write.txt');
// console.log(data.toString());
// console.log("程序执行结束!");


var fs = require("fs");

fs.readFile('write.txt', function (err, data) {
    if (err){
      return console.error(err);
    }
    console.log(data.toString());
});

console.log("程序执行结束!");