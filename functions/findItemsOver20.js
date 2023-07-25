export default function findItemsOver20(itemList) {
  if (typeof itemList == "object") {
    let results = [];
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      if (item.qty > 20) {
        results.push(item);
      }
    }
    return results;
  } else {
    return "Input should be an object";
  }
}
