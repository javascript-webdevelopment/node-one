/* 
*
* Steps for setting up a node server using express
* 
* 1. Install express from npm
* 2. Require express at the top of the file
* 3. Invoke express saving it into a variable
* 4. Use that variable to start 'listening'
*
*/

// bring express in
const express = require('express');

// invoke express and save it in a variable
const app = express();

// get the server listening and choose what port
app.listen(3005, () => {
    // we console log so we can tell if it's running
    console.log('server running')
});