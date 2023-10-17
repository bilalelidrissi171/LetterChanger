
function arabic() {
	var t1 = document.getElementById("t1").value;
	for (var i = 0; i < t1.length; i++) {
		t1 = t1.replace("ا", "|");
		t1 = t1.replace("أ", "|");
		t1 = t1.replace("ج", "g");
		t1 = t1.replace("ح", "7");
		t1 = t1.replace("ز", "z");
		t1 = t1.replace("س", "s");
		t1 = t1.replace("ط", "T");
		t1 = t1.replace("ق", "9");
		t1 = t1.replace("ه", "8");
		t1 = t1.replace("إ", "|");
		t1 = t1.replace("آ", "I");

	}
	document.getElementById("t2").value = t1;
}

document.getElementById("b1").addEventListener("click", arabic);



function copy() {
	var copyText = document.getElementById("t2");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
}

document.getElementById("b2").addEventListener("click", copy);

