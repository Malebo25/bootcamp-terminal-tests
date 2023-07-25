export default function isFromBellville(regNumber) {
  if (regNumber == "") {
    return "No number plate in the input";
  } else if (regNumber.startsWith("CY")) {
    return true;
  } else if (!regNumber.startsWith("CY")) {
    return false;
  }
}
