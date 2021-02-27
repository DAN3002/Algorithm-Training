import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 1

# Solver
out = []

def isPowerOfTwo( x ): 
    return x and (not(x & (x - 1))) 

def findMove(map, current, end, move):
	global out

	if current == end:
		out += move
		return
	
	if current in [el[1] for el in move]:
		return

	next = map[current]
	for i in next:
		findMove(map, i, end, move + [(current, i)])

def solver(content):
	global out


	n = 2 ** int(content[0])
	arr = [int(s) for s in content[1].split(' ')]
	out = []

	arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
	n = len(arr)

	mapIndex = {}
	map = {}

	for i,el in enumerate(arr):
		mapIndex[el] = i
		map[i] = []

	for i in range(n):
		for j in range(i, n):
			if isPowerOfTwo(i ^ j):
				map[i].append(j)
				map[j].append(i)
	
	sort = sorted(arr)
	for i, el in enumerate(sort):
		realIndex = mapIndex[el]
		if i != realIndex:
			findMove(map, i,  realIndex, [])
			mapIndex[el] = i
			mapIndex[arr[i]] = realIndex
			
	print(len(out))
	print(arr)
	for i, j in out:
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
        solver(None)
