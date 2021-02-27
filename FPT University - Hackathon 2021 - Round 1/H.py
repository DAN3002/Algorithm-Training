import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 4


def sumNatural(n): 
    sum = (n * (n + 1)) 
    return int(sum) 

def sumEven(l, r): 
    return (sumNatural(int(r / 2)) - 
            sumNatural(int((l - 1) / 2))) 

# Solver
def solver(content):
    # m, n = [int(i) for i in content[0].split(' ')]
    m, n = [int(i) for i in input().split(' ')]
    print(sumEven(min(m,n), max(m, n)))


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



