import assert from "assert";
import isFromBellville from "../isFromBellville.js";
describe("Test my isFromBellville function", function () {
  it("it should return 'True' when called with a registration number that starts with CY", function () {
    assert.equal(true, isFromBellville("CY 123")), "This should be true";
  });

  it("it should return 'false' when called with a registration number that does not start with CY", function () {
    assert.equal(false, isFromBellville("CJ123")), "This should not be true";
  });

  it("it should return 'No number plate in the input' when called with an empty string", function () {
    assert.equal("No number plate in the input", isFromBellville("")),
      "This should not be true";
  });
  it("it should return 'True' when called with a registration number that starts with CY", function () {
    assert.equal(true, isFromBellville("CY12356")), "This should be true";
  });
});
