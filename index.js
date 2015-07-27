var co = require("co");
var jobs = {};
var result = {};

// =========== [ jobs.index() ] ===========
jobs.start = co.wrap(function*() {
    try {
        console.log("hello dm-util");
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve(result);
}); // jobs.index()

// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
