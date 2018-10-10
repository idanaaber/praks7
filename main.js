//DOM ELEMENTS
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ozOutput = document.getElementById('ozOutput');
let output = document.getElementById('output');
output.style.visibility = 'hidden';
//LISTENING TO EVENTS
kgInput.addEventListener('input', event => {
	let kg = event.target.value;
	if (kg == 0) {
		output.style.visibility = 'hidden';
	}	else{
		output.style.visibility = 'visible';
	}
	gramOutput.innerHTML = `${kg * 1000} g`;
	poundOutput.innerHTML = `${kg * 2.20462262} lb`;
	ozOutput.innerHTML = `${kg * 35.2739619} oz`;
});	