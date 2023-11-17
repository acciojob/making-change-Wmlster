const makeChange = (c) => { 
  // your name here

	let obj={ 
		"q":25,
		"d":10,
		"n":5,
		"p":1
	}
	
	let oj={};

	for(let i in obj)
		{
			let num=obj[i];

			let value1=parseInt(c/num); 
			c-=parseInt(num*value1);

			oj[i]=value1;  
			
		}  

	return oj;
};

// Do not the change the code below
const c = prompt("Enter c: "); 
alert(JSON.stringify(makeChange(c)));
