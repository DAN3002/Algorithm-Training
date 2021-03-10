import os
import math
import statistics
import random

TEST_MODE = True
# TEST_MODE = False
NUM_OF_TEST = 3


def k_mean(data, k: int, iteration: int, cost_distance=lambda point, centroid: abs(point - centroid),
           mean_function=statistics.mean):
    # cost_distance=lambda a, b: math.dist(a, b)
    centroids = random.sample(data, k)
    for _ in range(iteration):
        centroid_holder = [[] for __ in range(k)]
        # cluster assignment
        for point in data:
            centroid_index, min_distance = min(
                ((j, cost_distance(point, centroid)) for j, centroid in enumerate(centroids)), key=lambda _: _[1])
            centroid_holder[centroid_index].append(point)
        # move cluster to mean
        for i, assigned_data in enumerate(centroid_holder):
            if assigned_data:
                centroids[i] = mean_function(assigned_data)
            else:
                centroids[i] = random.choice(data)
    return centroids, centroid_holder


def cost_function(point, centroid):  # throw away centroid[1] -> garbage
    r, p = point
    return p * ((centroid[0] - r) ** 2)


def mean_function(data):
    a = sum(complex(r * p, p) for r, p in data)
    return [a.real / a.imag]


def solver(input):
    ...
    d, k = map(int, input().split())
    A = [list(map(int, input().split())) for _ in range(d)]
    centroids, centroid_holder = k_mean(A, k, 100, cost_function, mean_function)
    centroids = [round(centroid) for _ in centroids for centroid in _]  # flatten and round
    # print(centroids, centroid_holder, sep='\n')
    out = sum(
        sum(
            p * (centroids[i] - r) ** 2
            for r, p in centroid_holder[i]
        ) for i in range(k)
    )  # calculate total square error
    print(out)
    ...


if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            print(f'----------\nTestCase {i}')
            with open('../testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''),
                                                            i)) as f: content = f.readlines()
            holder = (_.strip() for _ in content)
            solver(lambda: next(holder))
    else:
        solver(input)
