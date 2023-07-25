import assert from "assert";
import fromWhere from "../functions/fromWhere.js";
describe("Test my fromWhere function", function () {
  it("it should return 'Bellville' when called with a parameter of 'CY'", function () {
    assert.equal("Bellville", fromWhere("CY"));
  });
  it("it should return 'Paarl' when called with a parameter of 'CJ'", function () {
    assert.equal("Paarl", fromWhere("CJ"));
  });
  it("it should return 'Cape Town' when called with a parameter of 'CA'", function () {
    assert.equal("Cape Town", fromWhere("CA"));
  });
  it("it should return 'Some other place' when called with a parameter other than 'CA','CJ', or CY ", function () {
    assert.equal("Some other place!", fromWhere("CV"));
  });
  it("it should return 'not a valid place' when called with a number or empty string", function () {
    assert.equal("not a valid place", fromWhere(""));
  });
  it("it should return 'not a valid place' when called with a number or empty string", function () {
    assert.equal("not a valid place", fromWhere(123));
  });
});
