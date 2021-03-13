import os
import math

# TEST_MODE = True
TEST_MODE = False
NUM_OF_TEST = 3

def factor(n):
    s = []; p = 2
    while (p*p <= n):
        e = 0
        while (n%p == 0):
            e += 1; n //= p
        if e > 0: s.append((p,e))
        p += 1
    if n > 1: s.append((n,1))
    return s
 
def sigma(n):
    total = 1
    for (p,e) in factor(n):
        total *= sum([p**i for i in range(0,e+1)])
    return total


def solver(input):
    start, end = map(int , input().split())
    max = 0; n = 1;
    out = []
    while(n <= end):
        s = sigma(n)
        if s > max:
            if n >= start:
                out.append(n) 
            max = s
        n += 1
    print(', '.join(map(str, out)))

if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            print(f'----------\nTestCase {i}')
            with open('testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''), i)) as f: content = f.readlines()
            holder = (_.strip() for _ in content)
            solver(lambda: next(holder))
    else:
        solver(input)
