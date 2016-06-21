
var assert = require('assert');
var fs = require('fs');

var modeToString = require("../");

describe('modeToString', function() {
    it('-rwxrwxrwx', function() {
          assert.equal('-rwxrwxrwx',modeToString(0777));
    });
    it('----------', function() {
          assert.equal('-rwxrwxrwx',modeToString(0777));
    });
    it('-r-x-w-r-x', function() {
          assert.equal('-r-x-w-r-x',modeToString(00525));
    });
    it('drwxrwxrwx', function() {
          assert.equal('drwxrwxrwx',modeToString(040777));
    });
    it('d---------', function() {
          assert.equal('d---------',modeToString(040000));
    });
    it('lrwxrwxrwx', function() {
          assert.equal('lrwxrwxrwx',modeToString(016877));
    });
    it('fs.stat .', function() {
          var mode = fs.statSync('.');
          assert.equal('d',modeToString(mode).charAt(0));
    });
});
