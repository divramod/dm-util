var jobs = {};

jobs.cpTemplate = require("./jobs/cpTemplate/index.js").start;
jobs.pathGet = require("./jobs/pathGet/index.js");
jobs.getJsonFromFile = require("./jobs/getJsonFromFile/index.js").start;

module.exports = jobs;
