int minNumberOfFractions(int a, int b) {
    int[] f = new int[a + 1];
    for (int i = 1; i <= a; i++) {
        if (b % i == 0) {
            f[i] = 1;
        } else f[i] = i;
    }
    
    for (int i = 2; i < a; i++) {
        if (b % i == 0) {
            for (int j = 1; j + i <= a; j++) {
                if (f[i + j] > f[i] + f[j]) {
                    f[i + j] = f[i] + f[j];
                }
            }

        }
    }
    return f[a];
}

