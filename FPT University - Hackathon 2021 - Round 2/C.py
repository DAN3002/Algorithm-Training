import os
import math

# TEST_MODE = True
TEST_MODE = False
NUM_OF_TEST = 2

def solver(input):
    ...
    A = list(input())
    current = A[0]
    out = ""
    count = 0
    for i, e in enumerate(A):
        if current == e:
            count += 1
        else:
            out += current
            out += str(count)
            current = e
            count = 1

    out += str(current)
    out += str(count)
    print(out)
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
