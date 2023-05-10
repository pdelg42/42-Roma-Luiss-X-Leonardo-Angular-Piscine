const inputString = document.getElementById("lastName");
const errorMsg = document.getElementById("errorMsg");

inputString.addEventListener("input", function() {
  const strValue = inputString.value;
  const isNumber = /^\d+$/.test(strValue);

  if (isNumber) {
    errorMsg.textContent = "Inserisci una stringa valida!";
  }
  else if (strValue == ""){
    errorMsg.textContent = " ";

  }
  else {
    errorMsg.textContent = "Input valido!";
  }
});
