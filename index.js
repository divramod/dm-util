var jobs = {};

jobs.cpTemplate = require("./jobs/cpTemplate/index.js").start;
jobs.pathGet = require("./jobs/pathGet/index.js");

module.exports = jobs;
