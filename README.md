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
Work Order:
- replace strings in files
- rename files
- rename directories

```
var dmUtil = require("dm-util");

// configure the task
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

# dm-util

## Description
*

## Run
```
dmu [yml]
dm-util [yml]
```

## Install

```
npm install dm-util -g
```

## Tasks

## Config
* you can place a .dm-util.json file in your home directory (~/.dm-util.json)
* the following things are allowed at the moment
```javascript
{
}
```

## Lessons Learned
