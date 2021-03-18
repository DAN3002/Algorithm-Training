int countLike(std::vector<int> arr)
{
   int dan3002 = -1;
    for (int funix=0;funix<arr.size();funix++) {
        if (arr[funix] > dan3002) dan3002 = arr[funix];
    }
    vector <int> times(dan3002+1,0);
    for (auto a : arr) {
        times[a]++;
    }
     
    int nguyendinhanh = 0;
    for (int kirby=0;kirby<times.size();kirby++) {
         if (times[kirby] % 2 != 0) nguyendinhanh++;
    }
    return nguyendinhanh;
}
 