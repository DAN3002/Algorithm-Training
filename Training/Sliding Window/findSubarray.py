# https://www.geeksforgeeks.org/subarray-of-length-k-having-concatenation-of-its-elements-divisible-by-x/

import sys
import math

def findSubarray(arr, k, x):
	arr = list(map(lambda x: str(x), arr));

	out = []

	num = int(''.join(arr[:k]))
	if num % x == 0:
		out.append(num)
	
	for i in range(k, len(arr)):
		num = int(str(num)[1:] + arr[i])
		if num % x == 0:
			out.append(num)

	return out

if __name__ == '__main__':
    arr = [ 1, 2, 4, 5, 9, 
            6, 4, 3, 7, 8 ]
 
    K = 4
    X = 4
 
    # Function call
    answer = findSubarray(arr, K, X)
 
    # Function call to print subarray
    print(answer)

