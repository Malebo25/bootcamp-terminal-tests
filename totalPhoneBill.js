export default function totalPhoneBill(Records) {
  var phoneRecord = Records.split(",");
  var phoneBill = 0;

  for (var i = 0; i < phoneRecord.length; i++) {
    var record = phoneRecord[i].trim();
    if (record == "call") {
      phoneBill += 2.75;
    } else if (record == "sms") {
      phoneBill += 0.65;
    } else {
      return "not a valid phone record";
    }
  }
  return "R" + phoneBill.toFixed(2);
}
