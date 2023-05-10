
function control(id, msg) {
  var inputString = document.getElementById(id);
  var errorMsg = document.getElementById(msg);
  var strValue = inputString.value;
  var isNumber = /^\d+$/.test(strValue);
  if (isNumber) {
    errorMsg.textContent = "Inserisci una stringa valida!";
  } 
  else if (strValue == ""){
    errorMsg.textContent = " ";

  }
  else {
    errorMsg.textContent = "Input valido!";
  }
};

function controlZip(id, msg) {
  var inputString = document.getElementById(id);
  var errorMsg = document.getElementById(msg);
  var strValue = inputString.value;
  var isNumber = /^\d+$/.test(strValue);
  var x = String;
  x = strValue;
  if (strValue == ""){
    errorMsg.textContent = " ";
  }
  else if (!isNumber) {
    errorMsg.textContent = "Inserisci una password valida!";
  }
  else if (x.length != 5) {
    errorMsg.textContent = "Inserisci una password di 5!";
  }
  else {
    errorMsg.textContent = "Input valido!";
  }
};

function resetForm() {
  var element = document.getElementById("megaform");
  element.reset()
};