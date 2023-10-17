
function arabic() {
	var t1 = document.getElementById("t1").value;
	for (var i = 0; i < t1.length; i++) {
		t1 = t1.replace("ا", "|");
		t1 = t1.replace("أ", "أ");
		t1 = t1.replace("ب", "ب");
		t1 = t1.replace("ت", "ت");
		t1 = t1.replace("ث", "ث");
		t1 = t1.replace("ج", "g");
		t1 = t1.replace("ح", "7");
		t1 = t1.replace("خ", "خ");
		t1 = t1.replace("د", "د");
		t1 = t1.replace("ذ", "ذ");
		t1 = t1.replace("ر", "ر");
		t1 = t1.replace("ز", "z");
		t1 = t1.replace("س", "s");
		t1 = t1.replace("ش", "ش");
		t1 = t1.replace("ص", "ص");
		t1 = t1.replace("ض", "ض");
		t1 = t1.replace("ط", "T");
		t1 = t1.replace("ظ", "ظ");
		t1 = t1.replace("ع", "ع");
		t1 = t1.replace("غ", "غ");
		t1 = t1.replace("ف", "ف");
		t1 = t1.replace("ق", "9");
		t1 = t1.replace("ك", "ك");
		t1 = t1.replace("ل", "ل");
		t1 = t1.replace("م", "م");
		t1 = t1.replace("ن", "ن");
		t1 = t1.replace("ه", "8");
		t1 = t1.replace("و", "و");
		t1 = t1.replace("ي", "ي");
		t1 = t1.replace("ى", "ى");
		t1 = t1.replace("ئ", "ئ");
		t1 = t1.replace("ؤ", "ؤ");
		t1 = t1.replace("ء", "ء");
		t1 = t1.replace("إ", "|");
		t1 = t1.replace("آ", "I");
		t1 = t1.replace("ة", "ة");
		
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

