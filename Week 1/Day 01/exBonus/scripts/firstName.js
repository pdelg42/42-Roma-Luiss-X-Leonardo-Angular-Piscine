const inputString2 = document.getElementById("firstName");
const errorMsg2 = document.getElementById("errorMsg2");

inputString2.addEventListener("input", function() {
  const strValue2 = inputString2.value;
  const isNumber2 = /^\d+$/.test(strValue2);

  if (isNumber2) {
    errorMsg2.textContent = "Inserisci una stringa valida!";
  } 
  else if (strValue2 == ""){
    errorMsg2.textContent = " ";

  }
  else {
    errorMsg2.textContent = "Input valido!";
  }
});
