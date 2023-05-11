function isNumeric(numb, errorMsg) {
	var i = 0;
  
	while (numb[i]) {
	  if (!(numb[i] >= '0' && numb[i] <= '9')) {
		return (0);
	  }
	  i++;
	}
	return (1);
}

function calculate() {
	const left = document.getElementById("x").value;
	const operator = document.getElementById("menu").value;
	const right = document.getElementById("y").value;
	var output = document.getElementById("output");

	if (isNumeric(left) && isNumeric(right)) {
		var x = Number(left);
		var y = Number(right);
		if (y == 0 && operator == "/") {
			output.textContent = "You can't divide for zero!";
			window.open('https://youtu.be/T2U07KFqmew', '_blank');
			return false;
		} else {
			var result = operation(x, y, operator);
			output.textContent = result;
			return true;
		}
	} else {
		return false
	}
}

function operation(x, y, op) {
	if (op == "+")
		return x + y;
	if (op == "-")
		return x - y;
	if (op == "*")
		return x * y;
	if (op == "/")
		return x / y;	
}
