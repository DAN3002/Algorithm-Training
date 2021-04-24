int symmetricPrime(int n) {
    int[] pn = new int[] {2, 3, 5, 7, 11, 0};
    int[] pre = new int[] { 1, 3, 7, 9 };
    for (int k = 10; n > 5; k *= 10) {
        for (int odd = 0; n > 5 && odd < 2; odd++) {
            for (int p = 0; n > 5 && p < 4; p++) {
                int max = pre[p] * k + k;
                for (int i = pre[p] * k; n > 5 && i < max; i++) {
                    int v = i;
                    int t = (odd == 0 ? i / 10 : i);
                    while (t > 0) {
                        v = v * 10 + (t % 10);
                        t /= 10;
                    }

                    boolean test = v % 3 != 0;
                    t = (int) Math.floor(Math.sqrt(v));
                    for (int j = 7; test && j <= t; j += 2) {
                        test = v % j != 0;
                    }
                    if (test) {
                        n--;
                        pn[5] = v;
                    }
                }
            }
        }
    }
    return pn[5] != 0 ? pn[5] : pn[n - 1];
}


