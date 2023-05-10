
function control(id, msg) {
  var inputString = document.getElementById(id);
  var errorMsg = document.getElementById(msg);
  var strValue = inputString.value;
  var isNumber = /^\d+$/.test(strValue);
  var x = String;
  x = strValue;

  if (isNumeric(x)) {
    errorMsg.textContent = "Sei il figlio di Musk?";
  }
  else if (isNumber) {
    errorMsg.textContent = "Inserisci una stringa valida!";
  } 
  else if (strValue == "") {
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

function isNumeric (x, errorMsg) {
  var i = 0;

  while (x[i]) {
    if (x[i] >= '0' && x[i] <= '9') {
      return (1);
      break ;
    }
    i++;
  }
  return (0);
}

function resetForm() {
  var element = document.getElementById("megaform");
  var sp = document.getElementsByTagName("span"); 

  element.reset()
  for (i in sp) {
    sp[i].textContent = "";
  }
};

function sendForm() {
  var errorMsg4 = document.getElementById("errorMsg4");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  const studentWorker = document.getElementById("studentWorker");
  var textBox = document.getElementById("text-box");

  console.log(studentWorker);
  if (firstName.value == "" || lastName.value == "") {
    errorMsg4.textContent = "Complete the fields!";
  }
  if (studentWorker) {
    alert("ok");
  }
}