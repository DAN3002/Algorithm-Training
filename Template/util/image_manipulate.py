import random
import math
from statistics import mean


def mean_threshold(image):
    """
    image is n x m x 1
    """
    height, width = len(image), len(image[0])
    mean = sum(map(sum, image)) // (width * height)
    for j in range(width):
        for i in range(height):
            image[i, j] = 255 if image[i, j] > mean else 0
    return image


def k_mean(data, k: int, iteration: int, cost_distance=lambda a, b: abs(a - b)):
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
                centroids[i] = mean(assigned_data)
            else:
                centroids[i] = random.choice(data)
    return centroids, centroid_holder
