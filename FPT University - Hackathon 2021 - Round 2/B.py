
import os
import math

# TEST_MODE = True
TEST_MODE = False
NUM_OF_TEST = 3

def solver(input):
	h1, w1, h2, w2 = map(int, input().split())
	A = []
	for _ in range(h1): 
		A += list(map(int, input().split()))

	temp = [0] * (h2 * w2)
	x_ratio = int(((w1<<16)/w2)) +1
	y_ratio = int(((h1<<16)/h2)) +1
	x2, y2 = 0,0

	for i in range(h2):
		for j in range(w2):
			x2 = ((j*x_ratio)>>16) 
			y2 = ((i*y_ratio)>>16) 
			temp[(i*w2)+j] = A[(y2*w1)+x2] 

	res = []
	for i in range(h2):
		print(' '.join(map(str, temp[i*w2:i*w2+w2])))
	# print(out)

if __name__ == '__main__':
	if TEST_MODE:
		for i in range(1, NUM_OF_TEST + 1):
			print(f'----------\nTestCase {i}')
			with open('testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''), i)) as f: content = f.readlines()
			holder = (_.strip() for _ in content)
			solver(lambda: next(holder))
	else:
		solver(input)
