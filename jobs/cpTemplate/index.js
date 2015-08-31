// =========== [ REQUIRE ] ===========
var co = require("co");
var dmPrompt = require("dm-prompt").Inquirer;
var colors = require("colors");

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.start() ] ===========
job.start = co.wrap(function*(config) {
    try {
        // =========== [ proof if existent ] ===========
        if (test("-d", config.targetPath) && config.overwrite === "ask") {
            var overwriteTaskAnswer =
                yield dmPrompt({
                    type: "input",
                    name: "overwriteTask",
                    message: "The path is existent! Will you overwrite it? [Yes]".red
                });
            var overwriteTask = overwriteTaskAnswer.overwriteTask;
            if (overwriteTask === "Yes") {
                config.overwrite = true;
            }
        }

        // =========== [ overwrite ] ===========
        if (config.overwrite === true) {
            // =========== [ delete ] ===========
            if (config.deleteBefore) {
                if (config.deleteBefore === true && test("-d", config.targetPath)) {
                    var count = (config.targetPath.match(/\//g) || []).length;
                    // =========== [ safety for not removing something falsly ] ===========
                    if (count > 3) {
                        var deleteFolderAnswer =
                            yield dmPrompt({
                                type: "input",
                                name: "deleteFolder",
                                message: "You are going to delete the folder " + config.targetPath.red + " Are you sure?: [Yes]"
                            });
                        var deleteFolder = deleteFolderAnswer.deleteFolder;
                        if (deleteFolder === "Yes") {
                            rm("-rf", config.targetPath);
                        }
                    }
                }
            }

            // =========== [ create ] ===========
            mkdir("-p", config.targetPath);
            cp('-Rf', config.templatePath + "/*", config.targetPath);

            // =========== [ replace files ] ===========
            find(config.targetPath).forEach(function(file) {
                if (test("-f", file)) {
                    config.replace.forEach(function(replaceObj) {
                        sed('-i', replaceObj.search, replaceObj.replace, file);
                    });
                    if (config.rename) {
                        if (config.rename.indexOf("files") > -1) {
                            var fileName = file.substring(file.lastIndexOf("/", file.length));
                            config.replace.forEach(function(replaceObj) {
                                if (fileName.indexOf(replaceObj.search) > -1) {
                                    var newPath = file.replace(replaceObj.search, replaceObj.replace);
                                    mv("-f", file, newPath);
                                }
                            });
                        }
                    }
                }
            });

            // =========== [ replace directories ] ===========
            find(config.targetPath).forEach(function(file) {
                if (test("-d", file)) {
                    if (config.rename) {
                        if (config.rename.indexOf("dirs") > -1) {
                            config.replace.forEach(function(replaceObj) {
                                var newPath = file.replace(replaceObj.search, replaceObj.replace);
                                if (file !== newPath) {
                                    mv("-f", file, newPath);
                                }
                            });
                        }
                    }
                }
            });

            // =========== [ stdout ] ===========
            if (test("-d", config.targetPath)) {
                if (config.messages) {
                    if (config.messages.success) {
                        console.log(config.messages.success.green);
                    }
                }
            }
        } else {

            // =========== [ stdout ] ===========
            if (config.messages) {
                if (config.messages.error) {
                    console.log(config.messages.error.red);
                }
            }
        }
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }
    return yield Promise.resolve();
}); // job.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
