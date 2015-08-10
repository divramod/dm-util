// =========== [ REQUIRE ] ===========
var co = require("co");
var dmPath = require("dm-path");
var fs = require("fs");
require("shelljs/global");

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.start() ] ===========
job.start = function(path) {
    try {
        var path = dmPath.replace(path);

        var json = {};
        json.path = path;
        if (test("-f", path)) {
            json.data = JSON.parse(fs.readFileSync(path, 'utf8'));
            json.success = true;
        } else {
            json.success = false;
            json.message = "File from path not existent!";
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }
    return json;
}; // job.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
