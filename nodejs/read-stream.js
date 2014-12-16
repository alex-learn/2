#!/usr/bin/env node --harmony
"use strict";

const fs = require('fs'),
      fileName = process.argv[2],
      data = fs.readFileSync(fileName), // blocking file io
      stream = fs.createReadStream(fileName); // nonblocking io

  process.stdout.write("(blocking-readFileSync) data : \n" + data);

  stream.on('data', function(chunk) {
    process.stdout.write("(nonblocking-readStream) chunk : \n" + chunk);
  });

  stream.on('error', function(err) {
    process.stderr.write("ERROR : " + err.message + "\n");
  });
