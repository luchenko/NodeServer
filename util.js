const util = {};

function log(x,...theArgs)
{
console.log(x,);
}

util.log = log;

module.exports = util;