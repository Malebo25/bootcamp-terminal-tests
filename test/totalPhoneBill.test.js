import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";
describe("Test my totalPhoneBill function", function () {
  it("it should return 'R7.45' when called with a comma separated string", function () {
    assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"));
  });
  it("it should return 'R3.40' when called with a comma separated string", function () {
    assert.equal("R3.40", totalPhoneBill("call, sms"));
  });
  it("it should return 'not a valid phone record' when called with other than a comma separated string", function () {
    assert.equal("not a valid phone record", totalPhoneBill(""));
  });
  it("it should return 'not a valid phone record' when called with other than a comma separated string", function () {
    assert.equal("not a valid phone record", totalPhoneBill("text"));
  });
});
