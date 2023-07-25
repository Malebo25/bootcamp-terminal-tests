export default function findItemsOver(itemList, num) {
  if (typeof itemList == "object") {
    let results = [];
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      if (item.qty > num) {
        results.push(item);
      }
    }
    return results;
  } else {
    return "Input should be an object";
  }
}
