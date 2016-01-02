fs-mode-to-string
=================
Create a Unix-permissions string from an `fs.stat` file or directory `mode`, eg `0777`to `-rwxrwxrwx`

## Install

    npm i -S fs-mode-to-string

## Usage

```` javascript
var fs = require('fs');
var modeString = require('fs-mode-to-string');

// Pass an fs.stat object
var dirMode = fs.statSync('.');
console.log(modeString(dirMode));
// -> 'drwxr--r--'

// Pass an integer
console.log(modeString(0777));
// -> '-rwxrwxrwx'

````