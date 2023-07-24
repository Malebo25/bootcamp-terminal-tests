import assert from "assert";
import regCheck from "../regCheck.js";
describe("Test my regCheck function", function () {
  it("it should return 'True' when the second parameter matches the last two characters of the first parameter", function () {
    assert.equal(true, regCheck("DC 55 YU GP", "GP")), "This should be true";
  });

  it("it should return 'false' when the second parameter does not match the last two characters of the  ", function () {
    assert.equal(false, regCheck("DC 55 YU py", "Gy")),
      "This should not be true";
  });

  it("it should return 'not a valid input' when called with an empty string", function () {
    assert.equal("not a valid input", regCheck("")), "This should not be true";
  });
  it("it should return 'True' when the second parameter matches the last two characters of the first parameter", function () {
    assert.equal(true, regCheck("Dg55UGP", "GP")), "This should be true";
  });
});
