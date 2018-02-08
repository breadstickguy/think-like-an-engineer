//	Which functions break the S in SOLID???

function add(a, b) {
	return a + b;
}

function sayHello(name) {
	return	`Hi my name is ${name}`;
}

function reverseHello(name) {
	return sayHello(name).split('').reverse().join('');
}
	
let array = [24, 6, 43, 9];

function arraySum(array) {
 	return array.reduce(add, 0);
}

function average(array) {
	return arraySum(array) / array.length;
}

let obj = {
	name: `Larry`,
	job: `Hacker`,
	bacon: true
}

function printObj(obj) {
	 for (key in obj) {
	 	console.log(`${key}: ${obj[key]}`);
	}
}

function letsDance(obj) {
	obj.bacon = false;
	obj.name = 'Merp';
	return `Hey everyone, let's dance!`;
}

function runTheFunctions() {
	console.log(add(35,91));
	console.log(sayHello('Markus'));
	console.log(reverseHello('Barry'));
	console.log(arraySum([14,24,13,23,19]));
	console.log(average(array));
	printObj(obj);
	console.log(letsDance(obj));
}

runTheFunctions();
