export default function countAllFromTown(regNumbers, regId) {
  if (typeof regNumbers == "string" && regNumbers.length !== 0) {
    var counter = 0;
    var regNumList = regNumbers.split(",");

    for (var i = 0; i < regNumList.length; i++) {
      var regNum = regNumList[i].trim();
      if (regNum.startsWith(regId)) {
        counter++;
      }
    }
    return counter;
  } else {
    return "Not Valid Registration numbers";
  }
}
