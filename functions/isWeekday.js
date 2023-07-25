export default function isWeekday(day) {
  if (day.startsWith("S") || day.startsWith("s")) {
    return false;
  } else {
    return true;
  }
}
