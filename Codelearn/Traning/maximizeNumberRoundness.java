int maximizeNumberRoundness(int n)
{
    int tmp = n, zeros = 0;
    while (tmp > 0) {
        if (tmp % 10 == 0) {
            zeros += 1;
        }
        tmp /= 10;
    }
    int result = zeros;
    for (int i = 0; i < zeros; i++) {
        if (n % 10 == 0) {
            result -= 1;
        }
        n /= 10;
    }
    return result;
}
 