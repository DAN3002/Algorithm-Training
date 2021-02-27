import glob
import os
import sys

def solve(filename):
	k = 0
	pixels = [0 for i in range(0, 256)]
	with open(filename, 'r') as file:
		for (i, l) in enumerate(file):
			line = l.strip().split()
			if i == 0:
				k = int(line[1])
			else:
				pixels[int(line[0])] = int(line[1])
	print(k)

	after = [0 for i in range(256)]
	for c in range(0, 256):
		s = 0
		for i in range(c + 1, 256):
			s += pixels[i] * (i - c) * (i - c)
		after[c] = s

	between = [[0 for i in range(0, 256)] for j in range(0, 256)]
	for l in range(0, 256):
		for u in range(l, 256):
			s = 0
			for i in range(l + 1, u):
				d = min(i - l, u - i)
				s += pixels[i] * d * d
			between[l][u] = s

	getMinResults = [[None for i in range(0, 256)] for j in range(0, k)]
	for c in range(0, 256):
		s = 0
		for i in range(0, c):
			s += pixels[i] * (c - i) * (c - i)
		getMinResults[0][c] = s

	def getMin(l, c):
		if getMinResults[l][c] is not None:
			return getMinResults[l][c]
		m = sys.maxsize
		for i in range(0, c):
			s = getMin(l - 1, i) + between[i][c]
			if s < m:
				m = s
		getMinResults[l][c] = m
		return m

	answer = sys.maxsize
	for c in range(0, 256):
		s = getMin(k - 1, c) + after[c]
		if s < answer:
			answer = s

filename = input()
solve(filename)
