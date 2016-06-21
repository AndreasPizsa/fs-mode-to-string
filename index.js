
function modeToString(mode)
{
    if(mode.mode) mode=mode.mode; // handle fs.stat

    if(mode == 16877) return "lrwxrwxrwx";

    var result = new Buffer('drwxrwxrwx','ascii');

    if(!(mode & 040000)) result[0]=45;

    for(var i=1, bit = 0400;bit;i++,bit >>= 1) {
        if(!(mode & bit)) result[i]=45; // ASCII for '-'
    }

    return result.toString();
}

module.exports = modeToString;

