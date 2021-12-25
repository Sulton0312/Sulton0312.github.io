

function checksend(){
  var fn = document.getElementById('firstname').value;
  var ln = document.getElementById('lastname').value;
  var e = document.getElementById('email').value;
  var s = document.getElementById('subject').value;
  var m = document.getElementById('message').value;

  var none = "";


if (none == fn || none == ln || none == e || none == s || none == m) {
alert("please, fill in all the columns provided!");
}else{

alert("has been sent, thank you!");

}

}
