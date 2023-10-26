<script>
	// Javascript program for the above approach
	
	// 2D array for memoization
	let dp = new Array(1000);
	for(let i = 0; i < 1000; i++)
	{
		dp[i] = new Array(2);
	}

	// Recursive Function to count pairs
	// (x, y) such that x+y = x^y
	function IsSumEqualsXor(i, n, bound, s)
	{
	
		// If the String is traversed completely
		if (i == n)
			return 1;

		// If the current subproblem
		// is already calculated
		if (dp[i][bound] != -1)
			return dp[i][bound];

		let ans = 0;

		// If bound = 1 and s[i] == '0',
		// only (0, 0) can be placed
		if (bound!=0 && s[i] == '0') {
			ans = IsSumEqualsXor(i + 1, n, 1, s);
		}

		// Otherwise
		else {
			// Placing (0, 1) and (1, 0) are
			// equivalent. Hence, multiply by 2.
			ans = 2
				* IsSumEqualsXor(i + 1, n,
								bound!=0 & (s[i] == '1')?1:0, s);

			// Place (0, 0) at the current position.
			ans += IsSumEqualsXor(i + 1, n, 0, s);
		}

		// Return the answer
		dp[i][bound] = ans
		return dp[i][bound];
	}
	function reverse(input) {
		let a = input.split('');
		let l, r = a.length - 1;
		for (l = 0; l < r; l++, r--) {
			let temp = a[l];
			a[l] = a[r];
			a[r] = temp;
		}
		return a.join("");
	}
	
	// Utility Function to convert N
	// to its binary representation
	function convertToBinary(n)
	{
		let ans="";
		while (n>0) {

			let rem = String.fromCharCode(n % 2 + 48);
			ans+=(rem);
			n = parseInt(n / 2, 10);
		}
		ans = reverse(ans);
		return ans;
	}

	// Function to count pairs (x, y)
	// such that x + y = x^y
	function IsSumEqualsXorUtil(N)
	{
		// Convert the number to
		// equivalent binary representation
		let s = convertToBinary(N);

		// Initialize dp array with -1.
		for(let i = 0; i < dp.length; i++)
		{
			for (let j = 0; j < dp[0].length; j++) {
				dp[i][j] = -1;
			}
		}

		// Print answer returned by recursive function
		document.write(IsSumEqualsXor(0, s.length, 1, s.split('')) +"</br>");
	}
	
	// Input
	let N = 10;

	// Function call
	IsSumEqualsXorUtil(N);

// This code is contributed by suresh07.
</script>
