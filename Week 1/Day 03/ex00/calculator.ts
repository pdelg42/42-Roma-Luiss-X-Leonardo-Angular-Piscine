function isNumeric(numb: string, errorMsg?: string): number {
	let i = 0;

	while (numb[i]) {
		if (!(numb[i] >= '0' && numb[i] <= '9')) {
			return 0;
		}
		i++;
	}
	return 1;
}

function calculate(): boolean {
	const left = (document.getElementById("x") as HTMLInputElement).value;
	const operator = (document.getElementById("menu") as HTMLInputElement).value;
	const right = (document.getElementById("y") as HTMLInputElement).value;
	const output = document.getElementById("output");

	if (isNumeric(left) && isNumeric(right)) {
		const x = Number(left);
		const y = Number(right);
		if (y === 0 && operator === "/") {
			output.textContent = "You can't divide for zero!";
			window.open('https://youtu.be/T2U07KFqmew', '_blank');
			return false;
		} else {
			const result = operation(x, y, operator);
			output.textContent = result.toString();
			return true;
		}
	} else {
		return false;
	}
}

function operation(x: number, y: number, op: string): number {
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