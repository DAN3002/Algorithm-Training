import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 2

# Solver
def solver(content):
	n = 2 ** int(content[0])
	arr = [int(s) for s in content[1].split(' ')]

	move = []
	for i in range(n):
		minVal = (i, arr[i])
		for j in range(i, n):
			if arr[j] < minVal[1]:
				minVal = (j, arr[j])

		val = minVal[0]
		arr = arr[:i] + [arr[val]] + arr[i:val] + arr[(val+1):]
		for x in range(val, i, -1):
			move.append((x, x - 1))

	print(len(move))
	for i, j in move:
		print(f'{i} {j}')


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
        filename = input()
        solveByPath(filename)


