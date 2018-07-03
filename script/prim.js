var textbox;
var output = new Array();

function loadValue(){
	
	textbox = document.getElementById('inputid');
	
}

function main(){
	
	var max = parseInt(textbox.value);
	
	for(var i = 1; i <= max; i++){
		if()
	}
	
	printOut();
	
}

function printOut(){
	for(var i = 1; i < output.length; i++){
		document.getElementsByName('ausgabe')[0].innerHTML = output;
	}
}