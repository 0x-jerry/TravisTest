let assert = require("assert");
let main = require("../index.js");

describe("test converalls", () => {
    it("should return true when the value is true", () => {
        assert.equal(main(true), true);
    })
    it("should return false when the value is false", () => {
        assert.equal(main(false), false);
    })
});