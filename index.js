var jobs = {};

jobs.cpTemplate = require("./jobs/cpTemplate/index.js").start;
jobs.getJsonFromFile = require("./jobs/getJsonFromFile/index.js").start;

module.exports = jobs;
