import assert from "assert";
import greet from "../greet.js";
describe("Test my greet function", function () {
  it("it should return 'Hello, Malebo' when called with 'Malebo'", function () {
    assert.equal("Hello, Malebo", greet("Malebo")), "This should not be true";
  });

  it("it should return 'Hello, lebo' when called with 'lebo'", function () {
    assert.equal("Hello, lebo", greet("lebo"));
  });

  it("it should return 'No name was greeted' if an empty string was passed", function () {
    assert.equal("No name was greeted", greet("")), "This should not be true";
  });

  it("it should return 'Hello, cate' when called with 'cate'", function () {
    assert.equal("Hello, cate", greet("cate"));
  });
});
