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

	If the max is an odd number, say 99, we have to add the middle number:

	1 + 2 + ... + 99 = 49(100) + 50 = 4950;

	In simplief terms: the answer is the sum from 1 to n = n(n+1)/2
*/
function gauss(max) {
	return max*(max+1)/2;
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
	var max_15 = get_max(n, 15);

	return 3*gauss(max_3) + 5*gauss(max_5) - 15*(max_15);
}

calculate(1000); //Answer: 233168

