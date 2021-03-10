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


def k_mean(k):
    from random import randint

    # TODO
    ...
