function isNumeric_my(numb: string, errorMsg?: string): number {
	let i = 0;

	while (numb[i]) {
		if (!(numb[i] >= '0' && numb[i] <= '9')) {
			return 0;
		}
		i++;
	}
	return 1;
}

function calculates_my(): boolean {
	const left = (document.getElementById("x") as HTMLInputElement).value;
	const operator = (document.getElementById("menu") as HTMLInputElement).value;
	const right = (document.getElementById("y") as HTMLInputElement).value;
	const output = document.getElementById("output");

	if (isNumeric_my(left) == 1 && isNumeric_my(right) == 1) {
		const x = Number(left);
		const y = Number(right);
		if (y === 0 && operator === "/") {
			output.textContent = "You can't divide for zero!";
			window.open('https://youtu.be/T2U07KFqmew', '_blank');
			return false;
		} else {
			const result = operations_my(x, y, operator);
			output.textContent = result.toString();
			return true;
		}
	} else {
		output.textContent = "input non valido";
		return false;
	}
}

function operations_my(x: number, y: number, op: string): number {
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