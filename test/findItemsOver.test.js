import assert from "assert";
import findItemsOver from "../findItemsOver.js";
describe("Test my FindItemsOver function", function () {
  it("it should return  object items with quantities greater than 20", function () {
    var itemList = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 37 },
      { name: "bananas", qty: 27 },
      { name: "apples", qty: 3 },
    ];
    var num = 10;
    var results = [
      { name: "pears", qty: 37 },
      { name: "bananas", qty: 27 },
    ];

    assert.deepEqual(results, findItemsOver(itemList, num));
  });
  it("it should return  object items with quantities greater than 20", function () {
    var itemList = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 7 },
      { name: "bananas", qty: 7 },
      { name: "apples", qty: 3 },
    ];
    var num = 5;
    var results = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 7 },
      { name: "bananas", qty: 7 },
    ];

    assert.deepEqual(results, findItemsOver(itemList, num));
  });
  it("it should return Input should be an object", function () {
    assert.deepEqual("Input should be an object", findItemsOver(""));
  });
  it("it should return Input should be an object", function () {
    assert.deepEqual("Input should be an object", findItemsOver(123));
  });
});
