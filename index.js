var tasks = {};

// example
tasks.test = require("./tasks/test/index.js").start;
tasks.cpTemplate = require("./jobs/cpTemplate/index.js").start;
tasks.pathGet = require("./jobs/pathGet/index.js");
tasks.getJsonFromFile = require("./jobs/getJsonFromFile/index.js").start;

// automatically add tasks here

module.exports = tasks;
