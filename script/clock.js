function time(){
	
	var now = new Date();//create a new Date-Objekt
	var hour, minute, output;//definition of the variables
	
	hour = now.getHours();//set the variable with a count of hours
	minute = now.getMinutes();//set the variable with a count of minutes
	
	output = hour + ":" + minute;
	//console.log(output);//bring the result on the console
	
	document.getElementsByName('clock-output')[0].innerHTML = output;
}

function timeRepeat(){
	
	while(1>0){
		time();
		setTimeout(3000);
	}
}
