
document.getElementById('add').addEventListener("input", addition);

function addition(){

  var num1 = parseInt(document.getElementById('adnum1').value), num2 = parseInt(document.getElementById('adnum2').value);
  var summe = num1.valueAsNumber + num2.valueAsNumber;
  
  summe = summe.toFixed(2);
  
  return summe;

}
