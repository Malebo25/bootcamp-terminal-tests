export default function fromWhere(regNo) {
  if (typeof regNo == "string" && regNo.length !== 0) {
    if (regNo.startsWith("CY")) {
      return "Bellville";
    } else if (regNo.startsWith("CJ")) {
      return "Paarl";
    } else if (regNo.startsWith("CA")) {
      return "Cape Town";
    } else {
      return "Some other place!";
    }
  } else {
    return "not a valid place";
  }
}
