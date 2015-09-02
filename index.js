var tasks = {};

// example
tasks.test = require("./tasks/test/index.js").start;
tasks.cpTemplate = require("./tasks/cpTemplate/index.js").start;
tasks.pathGet = require("./tasks/pathGet/index.js");
tasks.getJsonFromFile = require("./tasks/getJsonFromFile/index.js").start;

// automatically add tasks here

module.exports = tasks;
