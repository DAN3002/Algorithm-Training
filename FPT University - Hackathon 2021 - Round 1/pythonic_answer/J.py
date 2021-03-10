import os
import math

TEST_MODE = True
# TEST_MODE = False
NUM_OF_TEST = 1


def solver(input):
    ...
    k = int(input())
    *V, e = list(map(int, input().split()))
    print(sum(num % e for num in V if (num % e) & 1))
    ...


if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            print(f'----------\nTestCase {i}')
            with open('testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''), i)) as f: content = f.readlines()
            holder = (_.strip() for _ in content)
            solver(lambda: next(holder))
    else:
        solver(input)
