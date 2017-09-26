//code below looks just like computational-blocking, but we've added the child process in line 2 and lines 6 to 8 and removed line 3 of the comp-blocking
var child_process = require("child_process");

console.log(1);

var newProcess = child_process.spawn("node", ["_fibonacci.js"], {
    stdio : "inherit"
});

console.log(2);
