import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";
describe("Test my CountAllPaarl function", function () {
  it("it should return '2' when after counting all the registration numbers that start with CJ", function () {
    assert.equal(2, countAllPaarl("CJ 345 123, CK 345, CJ 123"));
  });
  it("it should return '0' if there are no number plates that start with CJ", function () {
    assert.equal(0, countAllPaarl("CY345 123, CX 345, CW 123"));
  });
  it("it should return 'Not valid Registration numbers' if anything other than a comma separated list is input by the user", function () {
    assert.equal("Not Valid Registration numbers", countAllPaarl(1234));
  });
  it("it should return 'Not valid Registration numbers' if anything other than a comma separated list is input by the user", function () {
    assert.equal("Not Valid Registration numbers", countAllPaarl(""));
  });
});
