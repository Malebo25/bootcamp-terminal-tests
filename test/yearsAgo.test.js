import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe("Test my yearsAgo function", function () {
  it("it should return '23' when called with the year 2000", function () {
    assert.equal(23, yearsAgo(2000)), "This should not be true";
  });

  it("it should return '22' when called with the year 2001", function () {
    assert.equal(22, yearsAgo(2001));
  });
  it("it should return '28' when called with the year 1995", function () {
    assert.equal(28, yearsAgo(1995));
  });
  it("it should return 'not a valid year' when called with other than a valid year", function () {
    assert.equal("not valid year", yearsAgo(""));
  });
  it("it should return 'not a valid year' when called with other than a valid year", function () {
    assert.equal("not valid year", yearsAgo("malebo"));
  });
});
