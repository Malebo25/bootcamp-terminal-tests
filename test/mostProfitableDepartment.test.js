import assert from "assert";
import mostProfitableDepartment from "../functions/mostProfitableDepartment.js";
describe("Test my mostProfitableDepartment function", function () {
  it("it should return  the most profitable department", function () {
    var salesData = [
      { department: "hardware", sales: 4500, day: "Monday" },
      { department: "outdoor", sales: 1500, day: "Monday" },
      { department: "carpentry", sales: 5500, day: "Monday" },
      { department: "hardware", sales: 7500, day: "Tuesday" },
      { department: "outdoor", sales: 2505, day: "Tuesday" },
      { department: "carpentry", sales: 1540, day: "Tuesday" },
      { department: "hardware", sales: 1500, day: "Wednesday" },
      { department: "outdoor", sales: 8507, day: "Wednesday" },
      { department: "carpentry", sales: 8009, day: "Wednesday" },
      { department: "hardware", sales: 12000, day: "Thursday" },
      { department: "outdoor", sales: 18007, day: "Thursday" },
      { department: "carpentry", sales: 6109, day: "Thursday" },
      { department: "hardware", sales: 7005, day: "Friday" },
      { department: "outdoor", sales: 12006, day: "Friday" },
      { department: "carpentry", sales: 16109, day: "Friday" },
    ];
    assert.equal("outdoor", mostProfitableDepartment(salesData));
  });
  it("it should return  the most profitable department", function () {
    var salesData = [
      { department: "electronics", sales: 4500, day: "Monday" },
      { department: "outdoor", sales: 1500, day: "Monday" },
      { department: "carpentry", sales: 5500, day: "Monday" },
      { department: "steelwork", sales: 7500, day: "Tuesday" },
      { department: "outdoor", sales: 2505, day: "Tuesday" },
      { department: "carpentry", sales: 1540, day: "Tuesday" },
      { department: "hardware", sales: 1500, day: "Wednesday" },
      { department: "outdoor", sales: 8507, day: "Wednesday" },
      { department: "carpentry", sales: 8009, day: "Wednesday" },
      { department: "hardware", sales: 12000, day: "Thursday" },
      { department: "carpentry", sales: 6109, day: "Thursday" },
      { department: "hardware", sales: 7005, day: "Friday" },
      { department: "electronics", sales: 12006, day: "Friday" },
      { department: "electronics", sales: 16109, day: "Saturday" },
      { department: "steelwork", sales: 7500, day: "Tuesday" },
      { department: "outdoor", sales: 2505, day: "Tuesday" },
      { department: "carpentry", sales: 1540, day: "Tuesday" },
      { department: "steelwork", sales: 1500, day: "Wednesday" },
      { department: "carpentry", sales: 8009, day: "Wednesday" },
    ];

    assert.equal("electronics", mostProfitableDepartment(salesData));
  });
  it("it should return Input should be an object", function () {
    assert.deepEqual(
      "input should be an object",
      mostProfitableDepartment(123)
    );
  });
});
