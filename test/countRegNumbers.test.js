import assert from "assert";
import countRegNumbers from "../countRegNumbers.js";

describe("Test my countRegNumbers function", function () {
  it("it should return 3 when called with 'CA 182736,CY 523519,CJ 812328'", function () {
    assert.equal(3, countRegNumbers("CA 182736,CY 523519,CJ 812328")),
      "This should be true";
  });
  it("it should return 1 when called with 'CA 182736'", function () {
    assert.equal(1, countRegNumbers("CA 182736")), "This should be true";
  });
  it("it should return 'not a valid input''", function () {
    assert.equal("Not a valid input", countRegNumbers("")),
      "This should be true";
  });
});
