export default function regCheck(regNum, regEnd) {
  if (regNum == "") {
    return "not a valid input";
  } else if (regNum.endsWith(regEnd)) {
    return true;
  } else if (!regNum.endsWith(regEnd)) {
    return false;
  }
}
