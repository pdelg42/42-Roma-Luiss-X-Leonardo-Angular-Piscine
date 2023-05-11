function isNumeric_my(numb, errorMsg) {
    var i = 0;
    while (numb[i]) {
        if (!(numb[i] >= '0' && numb[i] <= '9')) {
            return 0;
        }
        i++;
    }
    return 1;
}
function calculates_my() {
    var left = document.getElementById("x").value;
    var operator = document.getElementById("menu").value;
    var right = document.getElementById("y").value;
    var output = document.getElementById("output");
    if (isNumeric_my(left) == 1 && isNumeric_my(right) == 1) {
        var x = Number(left);
        var y = Number(right);
        if (y === 0 && operator === "/") {
            output.textContent = "You can't divide for zero!";
            window.open('https://youtu.be/T2U07KFqmew', '_blank');
            return false;
        }
        else {
            var result = operations_my(x, y, operator);
            output.textContent = result.toString();
            return true;
        }
    }
    else {
        output.textContent = "input non valido";
        return false;
    }
}
function operations_my(x, y, op) {
    if (op === "+") {
        return x + y;
    }
    if (op === "-") {
        return x - y;
    }
    if (op === "*") {
        return x * y;
    }
    if (op === "/") {
        return x / y;
    }
    return 0;
}
