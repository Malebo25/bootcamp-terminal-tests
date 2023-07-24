import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe("Test my FindItemsOver20 function", function () {
  it("it should return  object items with quantities greater than 20", function () {
    var itemList = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 37 },
      { name: "bananas", qty: 27 },
      { name: "apples", qty: 3 },
    ];
    var results = [
      { name: "pears", qty: 37 },
      { name: "bananas", qty: 27 },
    ];

    assert.deepEqual(results, findItemsOver20(itemList));
  });
  it("it should return  object items with quantities greater than 20", function () {
    var itemList = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 7 },
      { name: "bananas", qty: 7 },
      { name: "apples", qty: 3 },
    ];
    assert.deepEqual([], findItemsOver20(itemList));
  });
  it("it should return Input should be an object", function () {
    assert.deepEqual("Input should be an object", findItemsOver20(""));
  });
  it("it should return Input should be an object", function () {
    assert.deepEqual("Input should be an object", findItemsOver20(123));
  });
});
