int[][] convexHull(int[][] ps){
    ArrayList<int[]> hull = new ArrayList<>();
        int leftmost = 0;
        for (int i = 1; i < ps.length; i++)
            if (ps[i][0] < ps[leftmost][0])
                leftmost = i;

        int p = leftmost, q;
        do {
            hull.add(ps[p]);
            q = (p + 1) % ps.length;
            for (int i = 0; i < ps.length; i++) {
                if (orientation(ps[p], ps[i], ps[q]) == 2)
                    q = i;
            }
            p = q;
        } while (p != leftmost);

        int[][] res = new int[hull.size()][2];
        int count = 0;

        for(int i = 0; i < ps.length; i++)
        {
            int[] el = ps[i];
            for(int j = 0; j < hull.size(); j++)
            {
                int[] check = hull.get(j);
                if(check[0] == el[0] && check[1] == el[1])
                {
                    res[count][0] = el[0];
                    res[count][1] = el[1];     
                    count++;               
                }
            }
        }
        // for (int i = 0; i < res.length; i++) {
        //     res[i][0] = hull.get(i)[0];
        //     res[i][1] = hull.get(i)[1];
        // }
        return res;


}


int orientation(int[] p, int[] q, int[] r) {
        int val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
        if (val == 0) return 0;  // collinear
        return (val > 0) ? 1 : 2; // clock or counterclock wise
}
