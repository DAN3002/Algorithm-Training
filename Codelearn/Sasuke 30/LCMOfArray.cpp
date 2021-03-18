int GCD(int a,int b) {
   return b == 0 ? a : GCD(b,a%b);
}
 
long long lcmOfArray(std::vector<int> arr)
{
    int mol = 1000000007;
    sort(arr.begin(), arr.end());
 
    long long out = 1;
    for(int i = 0; i < arr.size(); i++)
    {
        for(int j = 0; j < i; j++)
        {
            int gcd = GCD(arr[i], arr[j]);
            arr[i] /= gcd;
        }
        out = (out * arr[i]) % mol;
    }
 
    return out;
}
 