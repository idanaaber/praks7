//DOM ELEMENTS
let kgInput = document.getElementById('kgInput');

//LISTENING TO EVENTS
kgInput.addEventListener('input', event => {
	let kg = event.target.value;
	console.log(kg);
});	