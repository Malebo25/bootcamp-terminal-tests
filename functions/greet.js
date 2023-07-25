export default function greet(neighbour) {
  if (neighbour) {
    return "Hello, " + neighbour;
  } else if (neighbour == "") {
    return "No name was greeted";
  }
}
