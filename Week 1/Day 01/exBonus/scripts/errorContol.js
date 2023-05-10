
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
  console.log(strValue);
  if (strValue == ""){
    errorMsg.textContent = " ";
  }
  else if (!isNumber) {
    errorMsg.textContent = "Inserisci una password valida!";
  } 
  else {
    errorMsg.textContent = "Input valido!";
  }
};

