function addNewJuice() {
	let newJuice = prompt("new Fruit")
	
	juiceArry.push(newJuice);
	juiceArry.sort()
	document.getElementById("h1Id").innerHTML = juiceArry.join(" with ");

}

let juiceArry = [];
document.getElementById("h1Id").innerHTML = juiceArry