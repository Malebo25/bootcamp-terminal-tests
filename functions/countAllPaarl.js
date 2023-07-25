export default function countAllPaarl(regNumbers) {
  if (typeof regNumbers == "string" && regNumbers.length !== 0) {
    var counter = 0;
    var RegNumList = regNumbers.split(",");

    for (var i = 0; i < RegNumList.length; i++) {
      var regNum = RegNumList[i].trim();
      if (regNum.startsWith("CJ")) {
        counter++;
      }
    }
    return counter;
  } else {
    return "Not Valid Registration numbers";
  }
}
