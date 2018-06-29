var textbox;

function loadValue(){
	textbox = document.getElementById('inputid');
}

function showMessage(){
	alert("The message is: " + textbox.value);
}

function printMessage(){
	document.getElementsByName('textfield-msg').innerHTML = textbox.value;
}