import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 2

def getToRemove(map, remove):
	out = None
	maxRemove = 0

	key_remove = []
	if remove is not None:
		del map[remove]
	for key, value in map.items():
		value = [i for i in value if i != remove]

		n = len(value)
		if n == 0:
			key_remove.append(key)
		else:
			map[key] = value
			if n > maxRemove:
				out = key
				maxRemove = n

	for key in key_remove:
		del map[key]
	return out

# Solver
def solver(content):
	n, l = [int(s) for s in content[0].split(' ')]
	arr = [int(s) for s in content[1].split(' ')]
	arr.sort()

	map = {}
	for i in arr:
		map[i] = []
	
	for i, el in enumerate(arr):
		for j in range(i + 1, n):
			if arr[j] >= el + l:
				break

			map[el].append(arr[j])
			map[arr[j]].append(el)

	out = 0
	remove = getToRemove(map, None)
	while remove is not None:
		remove = getToRemove(map, remove)
		out += 1
	
	print(out)

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



