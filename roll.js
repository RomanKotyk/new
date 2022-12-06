let btn = document.getElementById('spin');
let list = document.querySelector('.container');
let chance = 0;
const cells = 1
let zero = 0;
let x = 0;
// от 0 до 100
const items = [
    {name: '0x'},
    {name: '3x'},
]

document.onkeypress = function(event){
	const list = document.querySelector('.container')

    if(event.key == '1'){
    	if(zero%2 == 0){
        	chance = 1710 + Math.random()*80;
        	list.style.transform =  "rotate(" + chance + "deg)";
        	zero++;
    	}else{
    		chance = -90 + Math.random()*80;
        	list.style.transform =  "rotate(" + chance + "deg)";
        	zero = 0;
    	}
        
    }


     if(event.key == '2'){
    	if(x%2 == 0){
        	chance = 1890 + Math.random()*80;
        	list.style.transform =  "rotate(" + chance + "deg)";
        	x++;
    	}else{
    		chance = 0 + Math.random()*80;
        	list.style.transform =  "rotate(" + chance + "deg)";
        	x = 0;
    	}
        
    }
    console.log(chance);
}