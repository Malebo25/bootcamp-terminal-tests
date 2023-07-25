import assert from "assert";
import countAllFromTown from "../functions/countAllFromTown.js";
describe("Test my CountAllFromTown function", function () {
  it("it should return '2' after counting all the registration numbers that start with the second parameter", function () {
    assert.equal(
      1,
      countAllFromTown("CJ 124,CY 567,CL 345, CF 456, CL 341", "CF")
    );
  });
  it("it should return '0' if there are no number plates that start with the second parameter", function () {
    assert.equal(0, countAllFromTown("CY345 123, CX 345, CW 123", "CF"));
  });
  it("it should return 'Not valid Registration numbers' if anything other than a comma separated list is input by the user", function () {
    assert.equal("Not Valid Registration numbers", countAllFromTown(1234));
  });
  it("it should return 'Not valid Registration numbers' if anything other than a comma separated list is input by the user", function () {
    assert.equal("Not Valid Registration numbers", countAllFromTown(""));
  });
});
