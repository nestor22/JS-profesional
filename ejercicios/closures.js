//funcion IIFE 
//funcion que se llama a si misma 
//

(function(){
	let color ='geen';
	function printColor(){
		console.log(color)
	}
	printColor();

})();
//funciones que regresan otras funcion 
//
function makeColorPrinter(color){
	let colorMessage = `the color is ${color}`;

	return function(){
		console.log(colorMessage)
	}
	
}

letgreenColor = makeColorPrinter('geen');

//variables privadas
//const counter = {counter: 7}
function mekeCounter(n){
	let count = n;

	return {
		increase: function(){
			count = count +1;
		}
		decrease: function(){
			count = count -1;
		}
		getCount: function(){
			return: count;
		}
	}
}

let counter = makeCounter(7);


