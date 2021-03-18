# https://practice.geeksforgeeks.org/problems/lets-play0201/1
import math

class Solution:
    def isSuperSimilar(self, n, m, arr, x):
        for i in range(n):
            for j in range(m):
                half = math.floor(m / 2) if i % 2 == 0 else math.ceil(m / 2)
                
                new_index = (half * x + j) % m
                if arr[i][new_index] != arr[i][j]:
                    return 0
        
        return 1
