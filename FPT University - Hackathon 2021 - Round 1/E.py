import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 1

# Solver
def solver(content):
	d, k = [int(i) for i in input().split(' ')]
	pixels = [0 for i in range(0, 256)]

	for i in range(d):
		r, p = [int(i) for i in input().split(' ')]
		pixels[r] = p

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

	print(answer)



def solveByPath(path):
    with open(path) as f:
        content = f.readlines()
    content = [x.strip() for x in content]
    solver(content)

if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            problem = sys.argv[0].replace('.py', '')
            path = f'testcase/samples-{problem}/{i}.in'
            print('----------')
            print('TestCase ' + str(i))
            solveByPath(path)

    else:
        solver(None)



