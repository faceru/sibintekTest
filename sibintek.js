'use strict'
let increment = (str) =>
{
	let simbol = str.substr(str.length - 1);
	let res = '';
	if(isNaN(parseInt((simbol))))
	{
		let simbolChar = String.fromCharCode(simbol.charCodeAt() + 1);
		res = str.replace(/.$/, simbolChar);
	}
	else
	{
		let reg = /\d+$/g;
		let num = str.match(reg);
		let numInt = parseInt(num);
		let resNum = '' + (numInt + 1);
		if(num[0].length != resNum.length)
		{
			 resNum = resNum.slice(1);
		}
		res = str.replace(reg, resNum);
	}
	return res;
}
let maxIntValue = Number.MAX_SAFE_INTEGER;

let bigString = '';
for(let i = 0; i < 1000000; i++){
	bigString+='a';
}

console.time('exampl1');
console.log(increment('a19B19'));
console.timeEnd('exampl1');

console.time('exampl2');
console.log(increment('a19B99'));
console.timeEnd('exampl2');

console.time('exampl3');
console.log(increment('NUM199'));
console.timeEnd('exampl3');

console.time('exampl4');
console.log(increment(`${bigString}${maxIntValue}`));
console.timeEnd('exampl4');