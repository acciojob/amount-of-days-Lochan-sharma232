//your JS code here. If required.
function daysOfAYear(year){
	if(year% 4===0 && (year % 100 !== 0 || year % 400 === 0)){
	console.log(366);
		return 366;
	}else{
		console.log(365);
		return 365;
	}
}
daysOfAYear(2022);
