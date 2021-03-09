# https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k-using-stack-in-on-time/?ref=rp
import sys
import math

def print_max(arr, k):
	out = []
	filter = []

	for i in range(len(arr)):
		if i > k:
			filter = [j for j in filter if j > i - k]			
		
		filter = [j for j in filter if arr[j] > arr[i]]
		filter.append(i)

		out.append(arr[filter[0]])

	return out

if __name__ == '__main__':
	a = [9, 7, 2, 4, 6, 8, 2, 1, 5] 
	k = 3
	print(print_max(a, k))
