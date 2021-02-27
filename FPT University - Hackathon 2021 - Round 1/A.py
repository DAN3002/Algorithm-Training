import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 3

def cal(arr, m):
    mol = 1e9 + 7

    out = 0
    for i in range(len(arr)):
        for j in range(m):
            out = (out + (arr[i][j] % mol)) % mol
    
    return out


# Solver
def solver(content):
    # n1, m1, n2, m2 = [int(i) for i in content[0].split(' ')]
    n1, m1, n2, m2 = [int(i) for i in input().split(' ')]
    if n1 != n2 or m1 != m1:
        print('different')
        return

    # arr1 = []
    # for i in range(1, n1 + 1):
    #     arr1.append([int(i) for i in content[i].split(' ')])
    
    # arr2 = []
    # for i in range(1, n2 + 1):
    #     arr2.append([int(i) for i in content[n1 + i].split(' ')])

    arr1 = []
    for i in range(1, n1 + 1):
        arr1.append([int(i) for i in input().split(' ')])
    
    arr2 = []
    for i in range(1, n2 + 1):
        arr2.append([int(i) for i in input().split(' ')])

    cal1 = cal(arr1, m1)
    cal2 = cal(arr2, m2)

    print('identical' if cal1 == cal2 else 'different')


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



