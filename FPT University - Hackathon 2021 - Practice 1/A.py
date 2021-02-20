import sys
import math 

# Config 
TEST_MODE = True
NUM_OF_TEST = 3

# Solver
def solver(content):
    average = int(content[0])
    twoWeek = int(content[1])
    if average <= 50 and twoWeek <= 10:
        print("White")
    elif twoWeek > 30:
        print("Red")
    else:
        print("Yellow")


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



