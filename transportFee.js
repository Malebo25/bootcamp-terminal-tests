export default function transportFee(shift) {
  if (typeof shift == "string" && shift.length !== 0) {
    if (shift == "morning") {
      return "R20";
    } else if (shift == "afternoon") {
      return "R10";
    } else if (shift == "night") {
      return "free";
    } else {
      return "not a shift";
    }
  }
  return "not a shift";
}
