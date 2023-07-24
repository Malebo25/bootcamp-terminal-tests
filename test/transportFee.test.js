import assert from "assert";
import transportFee from "../transportFee.js";

describe("Test my transportFee function", function () {
  it("it should return 'R20' when called with a parameter of 'morning'", function () {
    assert.equal("R20", transportFee("morning"));
  });
  it("it should return 'R10' when called with a parameter of 'afternoon'", function () {
    assert.equal("R10", transportFee("afternoon"));
  });
  it("it should return 'free' when called with a parameter of 'night'", function () {
    assert.equal("free", transportFee("night"));
  });
  it("it should return 'not a shift' other than the specified is called in the function ", function () {
    assert.equal("not a shift", transportFee(""));
  });
  it("it should return 'not a shift' other than the specified is called in the function ", function () {
    assert.equal("not a shift", transportFee(1235));
  });
  it("it should return 'not a shift' other than the specified is called in the function ", function () {
    assert.equal("not a shift", transportFee("noon"));
  });
});
