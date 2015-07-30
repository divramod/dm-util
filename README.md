# Shortcuts

    dmu
    dm-util

## description
Some helpers i need in my daily work with npm modules.

## installation

    npm install dm-util --save

## usage

### cpTemplate(config)

```
var dmUtil = require("dm-util");
// create task
var configTask = {
    templatePath: 'pathToTemplateFolder', // mandatory
    targetPath: 'pathToTarget', // mandatory
    deleteBefore: true, // optional default false
    overwrite: true, // [true, false, "ask"]
    rename: ["files", "dirs"], // renames files at first and dirs after that
    replace: [{ // mandatory: used for replacing strings in files, file names and directory names
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
