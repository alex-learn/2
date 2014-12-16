#!/usr/bin/env node --harmony
"use strict";

const fs = require('fs'),
  fileName = 'aaa';
var rBuffer = "";

readFile(fileName);
console.log(rBuffer);
  
function readFile(fileName) { fs.readFile(fileName, function (err, rBuffer) { 
  if (err) { throw err; }
  console.log(rBuffer.toString);
  });
}
