var should = require('chai').should();
var colors = require("colors");

// =========== [ dm-util TESTS ] ===========
describe('dm-util getJsonFromFile', function() {

    console.log("run dm-util getJsonFromFile".blue);

    // =========== [ fail ] ===========
    it('should fail with non existent path', function* testStart() {
        var getJsonFromFile = require(process.cwd() + "/jobs/getJsonFromFile/index.js");
        var json =
            yield getJsonFromFile.start("~/dotfiles/bla.json");
        json.success.should.equal(false);
        json.message.should.equal("File from path not existent!");
    });

    // =========== [ success ] ===========
    it('should succeed', function* testStart() {
        var getJsonFromFile = require(process.cwd() + "/jobs/getJsonFromFile/index.js");
        var path = process.cwd() + "/jobs/getJsonFromFile/test/test.json";

        var json =
            yield getJsonFromFile.start(path);
        json.path.should.equal(path);
        json.success.should.equal(true);
        json.data.name.should.equal("test");
    });


});
