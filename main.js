//DOM ELEMENTS
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');

//LISTENING TO EVENTS
kgInput.addEventListener('input', event => {
	let kg = event.target.value;
	
	gramOutput.innerHTML = `${kg * 1000} g`;
});	