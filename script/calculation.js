var Inum1, Inum2, num1, num2, num3;//definition of 'global' variables

function getNums(){
	Inum1 = document.getElementById('adnum1');//input out of a input-field
	Inum2 = document.getElementById('adnum2');//input out of a input-field
	num1 = parseInt(Inum1.value);//convert a string into a Int-var
	num2 = parseInt(Inum2.value);//convert a string into a Int-var
}


function addition(){
	num3 = num1 + num2;//addition of the two numbers
	//alert(num3);//test output on an alert-box
	//alert(Number(num1) + Number(num2));
	document.getElementsByName('output-msg')[0].innerHTML = num3;//output on a div-field
}
