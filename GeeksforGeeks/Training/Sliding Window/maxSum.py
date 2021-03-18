# https://www.geeksforgeeks.org/window-sliding-technique/
import sys
import math

def maxSum(arr, k):
	sum_val = sum(arr[:k])
	out = sum_val

	for i in range(k, len(arr)):
		sum_val = sum_val + arr[i] - arr[i - k]
		out = max(out, sum_val)
	
	return out

if __name__ == '__main__':
	arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
	k = 4
	n = len(arr)
	print(maxSum(arr, k))

