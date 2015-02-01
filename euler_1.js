/*
	Link: https://projecteuler.net/problem=1
	Problem: If we list all natural number below 10 that are multiples of 3 or 5,
					 we get 3, 5, 6, 9, sum of which is 23. Find the sum of all multiple of 
					 3 and 5 below 1000

	Solution: We split the series into multiples of 3 and multiples of 5. For each
						series of numbers, we factor out the 3 or 5, and we apply a simple 
						math trick of adding consecutive number. In other words:

						3 + 6 + 9 + ... + 999 = 3(1 + 2 + 3 + ... + 333);
						5 + 10 + 15 + ... + 995 = 5(1 + 2 + 3 + ... + 199);

						All we need at this point is to add the result of each series together
*/

/* 
	This is a simple math trick for adding consecutive numbers, often attributed to Gauss
	To use 1 + 2 + 3 + ... + 100 as an example: 
		1 + 100 = 101; 2 + 99 = 101; 3 + 98 = 101, etc.
	Total we have 50 of these pairs, all equalling 101. So, 
	1 + 2 + ... + 100 = 50(101) = 5050;

	If there is an odd number, 99, we have to add the middle number special:

	1 + 2 + ... + 99 = 49(100) + 50 = 4950;
*/
function gauss(max) {
	var half = 0; // Used only if max is odd, defaults to 0
	var pairs = max/2 // Used to count how many pairs are there, default to if max is even

	if (max%2 !== 0) { // if max is odd, we have to calculate half
		half = Math.ceil(max/2);
		pairs = Math.floor(max/2); //in this case pairs is one less than half 
	}

	return pairs * (1 + max) + half; 
}

// This function is to get the largest number < n that devides by the factor
// Ex. if n = 1000 and factor = 5, this would return 995
function get_max(n, factor) {
	var max = 0; //Set to 0 to indicate type
	for (i = 1; i <= factor; i++){
		if ((n-i)%factor === 0) {
			max = n-i;
		}
	}
	return max/factor;
}

function calculate(n) {
	var max_3 = get_max(n, 3);
	var max_5 = get_max(n, 5);

	return 3*gauss(max_3) + 5*gauss(max_5);
}

//Answer: 266333

