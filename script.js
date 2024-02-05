//your JS code here. If required.
const handleResult = (fisrt,second)=>{
	
	return("The final result is: "+(Number(fisrt)+Number(second)));
}
const first= prompt("First Input"); 
const second=prompt("Second Input"); 
alert(handleResult(Number(first*2),second));