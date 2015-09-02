// =========== [ REQUIRE ] ===========
var co = require("co");
var path = require("path");
var dmPrompt = require("dm-prompt").Inquirer;
require("shelljs/global");

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ task.current ] ===========
task.current = function() {
    return process.cwd();
}; // task.current

// =========== [ task.global ] ===========
task.global = function() {
    return path.join(path.dirname(require.main.filename), "..");
}; // task.global

// =========== [ task.home ] ===========
task.home = function() {
    return env["HOME"];
}; // task.global

// =========== [ task.inputOne ] ===========
task.inputOne = co.wrap(function*() {
    var inputOnePathAnswer =
        yield dmPrompt({
            type: "inputOne",
            name: "inputOnePath",
            message: "Please enter the path:"
        });
    var inputOnePath = inputOnePathAnswer.inputOnePath;

    return yield Promise.resolve(inputOnePath);
}); // task.inputOne

// =========== [ task.inputMany ] ===========
// TODO
task.inputMany = co.wrap(function*() {
  return yield Promise.resolve();
}); // task.inputMany

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
