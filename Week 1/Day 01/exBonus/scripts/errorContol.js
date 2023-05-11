
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
    errorMsg.textContent = "Inserisci una Zipcode valida!";
  }
  else if (x.length != 5) {
    errorMsg.textContent = "Inserisci uno Zipcode valido!";
  }
  else {
    errorMsg.textContent = "Input valido!";
  }
};

function isNumeric (x, errorMsg) {
  var i = 0;

  while (x[i]) {
    if (!((x[i] >= 'a' && x[i] <= 'z') || (x[i] >= 'A' && x[i] <= 'Z'))) {
      return (1);
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
  const studentWorker = document.querySelector('#studentWorker:checked');
  var textBox = document.getElementById("text-box");

  console.log(studentWorker);
  if (firstName.value == "" || lastName.value == "") {
    errorMsg4.textContent = "Complete the fields!";
  }
  if (studentWorker) {
    if (textBox.value == "")
      errorMsg4.textContent = "Complete the job description!";
  }
  if (!studentWorker) {
    if (textBox.value != "")
      errorMsg4.textContent = "check the work checkbox!";
  }
  else{
    resetForm()
    errorMsg4.textContent = "Sended!";
  }
}