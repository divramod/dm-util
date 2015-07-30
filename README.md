# Shortcuts

    dmu
    dm-util

## description
Some helpers i need in my daily work with npm modules.

## installation

    npm install dm-util --save

## usage

### cpTemplate(config)

Copies a template directory structure, replaces placeholders, renames files and directories.


```
var dmUtil = require("dm-util");
// create task
var configTask = {
    templatePath: 'pathToTemplateFolder', // mandatory
    targetPath: 'pathToTarget', // mandatory
    deleteBefore: true, // optional default false
    overwrite: true, // mandatory [true, false, "ask"]
    rename: ["files", "dirs"], // optional: renames files at first and dirs after that
    replace: [{ // optional: used for replacing strings in files, file names and directory names
        search: "TASKNAME",
        replace: taskName
    }, {
        search: "index.js",
        replace: "index1.js"
    }, {
        search: "blub",
        replace: "blablub"
    }],
    messages: { // optional
        success: "Task successful!",
        error: "Task not successful!""
    }
};
dmUtil.cpTemplate(configTask);
```
