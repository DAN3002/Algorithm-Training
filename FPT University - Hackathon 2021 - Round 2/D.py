import os
import math

# TEST_MODE = True
TEST_MODE = False
NUM_OF_TEST = 3

def maxHist(row):
    result = []
    top_val = 0

    max_area = 0
    area = 0
    i = 0
    while (i < len(row)):
        if (len(result) == 0) or (row[result[-1]] <= row[i]):
            result.append(i)
            i += 1
        else:
            top_val = row[result.pop()]
            area = top_val * i

            if (len(result)):
                area = top_val * (i - result[-1] - 1)
            max_area = max(area, max_area)

    while (len(result)):
        top_val = row[result.pop()]
        area = top_val * i
        if (len(result)):
            area = top_val * (i - result[-1] - 1)

        max_area = max(area, max_area)

    return max_area

def solver(input):
    n, m = map(int , input().split())
    A = []

    for i in range(n):
        A.append(list(map(int , input().split())))

    result = maxHist(A[0])
    for i in range(1, len(A)):
        for j in range(len(A[i])):
            if (A[i][j]):
                A[i][j] += A[i - 1][j]
        result = max(result, maxHist(A[i]))

    print(result)


if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            print(f'----------\nTestCase {i}')
            with open('testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''), i)) as f: content = f.readlines()
            holder = (_.strip() for _ in content)
            solver(lambda: next(holder))
    else:
        solver(input)
