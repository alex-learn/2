#!/usr/bin/env node --harmony
"use strict";

const fs = require('fs'),
      net = require('net'),
      fileName = process.argv[2];

// create server
const server = net.createServer(function(connection) {

  // reporting
  console.log('Subscriber connected.');
  connection.write("Now watching '" + fileName + "' for changes...\n");

  // setup
  let watcher = fs.watch(fileName, function() {
    var datenow = new Date();

    connection.write("File '" + fileName + "' changed: " + datenow.getFullYear() + ":" + datenow.getMonth() + ":" + datenow.getDate() + "\n");
  });

  // cleanup
  connection.on('close', function() {
    console.log('Subscriber disconnected.');
    watcher.close();
  });

  // other steps
});

if (!fileName) {
  throw Error('Please enter filename to watch.');
};

  // listening on port Socket
server.listen('/tmp/watcher.sock', function() {
  console.log('Listening for Subscriber...');
});

  // listening on port 5000/TCP
// server.listen(5000, function() {
//   console.log('Listening for Subscriber...');
// });


  
