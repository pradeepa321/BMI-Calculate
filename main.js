let form = document.querySelector('form');
form.addEventListener('submit',function(e){
	e.preventDefault();
	let height = parseInt(document.querySelector('#height').value);
	let weight = parseInt(document.querySelector('#weight').value);
	let result = document.querySelector('#result');
	if((height===" ")||(height<0)||(isNaN(height))){
		result.innerHTML="Enter the correct height value";
		
	}
	else if((weight===" ")||(weight<0)||(isNaN(weight))){
		result.innerHTML="please enter the correct weight value";
		
	}
	else {
		let bmi =Math.round((weight/((height*height)/10000)));
  
        if (bmi < 20) {
			result.innerHTML =`You are UNDER Weight  and  your BMI is ${bmi}`;
			result.style.backgroundColor="yellow";
			
		}
        else if(bmi >= 20 && bmi < 25) {
            result.innerHTML =`You are NORMAL Weight  and  your BMI is ${bmi}`;
			result.style.backgroundColor="orange";
		}
        else{
			result.innerHTML =`You are OVER Weight  and  your BMI is ${bmi}`;
			result.style.backgroundColor="lightblue";
		}
    }
		
	
});