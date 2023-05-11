const obj = JSON.parse(shop.json);
for (i in obj) {
	alert(obj[i]);
}
var h2 = document.getElementById("old_0");
h2.textContent = obj.log(Title);




function changeName(id) {
	if (id == "old_0") {
	} else if (id == "old_1") {
		h2.textContent = "Peppe Crack";
	} else {
		h2.textContent = "Peppa Crock";
	}
}

function changeImage(id) {
	var image = document.getElementById(id);
	if (id == "0") {
		image.src = "imgs/Pippo.jpeg";
	} else if (id == "1") {
		image.src = "imgs/Topopipo.jpeg";
	} else {
		image.src = "imgs/Peppa.jpeg";
	}
}