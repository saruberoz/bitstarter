#!/usr/bin/env node
var fs = require('fs');
var outfile = "assgn1-out1.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
