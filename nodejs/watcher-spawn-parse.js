#!/usr/bin/env node --harmony
"use strict";

const
  fs = require('fs'),
  spawn = require('child_process').spawn,
  filename = process.argv[2];

  if (!filename) {
    throw Error("File name?");
  }

  fs.watch(filename, function() {
    let
      ls = spawn('ls', ['-lh', filename]),
      output = '';
    ls.stdout.on('data', function(chunk){
      output += chunk.toString();
    });

  ls.on('close', function() {
    let parts = output.split(/ +/);
    console.dir([parts[0], parts[2], " -> ", parts[8]]);
  });
});

