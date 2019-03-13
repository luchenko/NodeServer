const Math = {};

function add(x1,x2){ return x1+x2;}

function sustract(x1,x2){return x1-x2;}

function multiply(x1,x2){ return x1*x2;}

function divide(x1,x2) { 
	 if (x2 ==0) { console.log('No se puede Dividir por zero'); }
	 else { return x1/x2; }
	}

Math.add = add;
Math.pi = 3.14;

module.exports = Math;