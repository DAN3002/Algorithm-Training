# Day 0: Mean, Median, and Mode
import math

n = int(input())
x = list(map(int, input().rstrip().split()))

x = sorted(x)

mean = sum(x) / n
mode = max(x, key=x.count)

half = n / 2
median = x[math.floor(half-1):math.ceil(half + 1)]
median = sum(median) / len(median)

print(round(mean, 1))
print(round(median, 1))
print(mode)
