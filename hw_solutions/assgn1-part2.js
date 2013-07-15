#!/usr/bin/env node

var fs = require('fs');
var outfile = "assgn1-out2.txt";
var out = getPrime(100);
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);


function getPrime(N) {
	// using sieve of eratotheness
	var i, p, str=[], primes=[];
	var x = 1000; //say the 100s primes is withing 1000
	for (i = 2 ; i < x/2 ; i++) {
		if(primes[i]) {
			continue;
		}
		for (p=2*i ; p <= x ; p+=i) {
			primes[p] = true;
		}
	}
	var count  = 1;
	for (i=2 ; i <= x ; i++) {
		if (count > 100)
			break;
		if (!primes[i]) {
			str.push(i);
			count++;
		}
	}

	return str.join(',');
	//return str2 + '\n'
}	
