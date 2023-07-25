export default function yearsAgo(year) {
  if (typeof year == "number") {
    return new Date().getFullYear() - year;
  }
  return "not valid year";
}
