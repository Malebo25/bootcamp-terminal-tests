export default function countRegNumbers(regNumber) {
  var list = regNumber.split(",");
  if (list == "") {
    return "Not a valid input";
  }

  return list.length;
}
