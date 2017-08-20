"use strict";

console.log("sonnet.js");

let sSonnet = document.getElementById('sonnet').innerText;

function myIndex() {
	let index = sSonnet.indexOf("orphans");
	console.log("index is", index);

	let length = sSonnet.length;
	console.log("length =", length);

	/*'gi' is for global and replaces all cases*/
	let winSwitch = sSonnet.replace("winter", "yuletide").replace(/ the /gi, " a large "); 
	document.getElementById('sonnet').innerHTML = winSwitch;
}

myIndex();