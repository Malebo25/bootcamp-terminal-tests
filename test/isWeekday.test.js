import assert from "assert";
import isWeekday from "../isWeekday.js";
describe("Test my isWeekday function", function () {
  it("it should return 'false' when called with a day that starts with 'S'", function () {
    assert.equal(false, isWeekday("Saturday")), "This should not be true";
  });

  it("it should return 'true' when called with a day that does not start with 'S'", function () {
    assert.equal(true, isWeekday("Monday"));
  });
  it("it should return 'false' when called with a day that starts with 'S'", function () {
    assert.equal(false, isWeekday("saturday")), "This should not be true";
  });

  it("it should return 'true' when called with a day that does not start with 'S'", function () {
    assert.equal(true, isWeekday("monday"));
  });
});
