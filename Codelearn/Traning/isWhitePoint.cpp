bool ok(int x, int y, int x1, int y1, int x2, int y2) {
      return x < x1 || x2 < x || y < y1 || y2 < y;
}
 
bool isWhitePoint(std::vector<int> a)
{
    int x1 = a[0] * 2;
    int y1 = a[1] * 2;
    int x2 = a[2] * 2;
    int y2 = a[3] * 2;
    int x3 = a[4] * 2;
    int y3 = a[5] * 2;
    int x4 = a[6] * 2;
    int y4 = a[7] * 2;
    int x5 = a[8] * 2;
    int y5 = a[9] * 2;
    int x6 = a[10] * 2;
    int y6 = a[11] * 2;
      for (int x = x1; x <= x2; x++) {
            if (ok(x, y1, x3, y3, x4, y4) && ok(x, y1, x5, y5, x6, y6)) {
                  return true;
            }
            if (ok(x, y2, x3, y3, x4, y4) && ok(x, y2, x5, y5, x6, y6)) {
            return true;
            }
      }
      for (int y = y1; y <= y2; y++) {
            if (ok(x1, y, x3, y3, x4, y4) && ok(x1, y, x5, y5, x6, y6)) {
            return true;
            }