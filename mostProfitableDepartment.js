export default function mostProfitableDepartment(salesData) {
  if (typeof salesData == "object") {
    const salesMap = {};

    for (var i = 0; i < salesData.length; i++) {
      const data = salesData[i];
      if (salesMap[data.department] === undefined) {
        salesMap[data.department] = 0;
      }
      salesMap[data.department] += data.sales;
    }
    var currentMaxSales = 0;
    var currentDepartment = "";
    for (const salesDepartment in salesMap) {
      const currentDepSales = salesMap[salesDepartment];
      if (currentDepSales > currentMaxSales) {
        currentMaxSales = currentDepSales;
        currentDepartment = salesDepartment;
      }
    }

    return currentDepartment;
  } else {
    return "input should be an object";
  }
}
