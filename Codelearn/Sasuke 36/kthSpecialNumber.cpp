string kthSpecialNumber(std::vector<int> arr, int k)
{
    sort(arr.begin(), arr.end());
    int len = arr.size(), i = 1, x, y;
    long s = len;
    if(arr[0] == 0){
    	x = len - 1;
    	y = 1;
    } else {
    	x = 1;
    	y = 0;
    }
	while(s < k){
		++i;
		s += x * pow(len, i - y);
	}
	s -= x * pow(len, i - y);
	x = k - s - 1;
	int n, a[11], l = 0;
	bool check = false;
	std::vector<string> v;
	for(int j = 1; j <= i; ++j){
		a[j] = arr[0];
	}
	while(!check){
		string s = "";
		for(int j = 1; j <= i; j++){
  			s += (char)(a[j] + 48);
 		}
 		v.push_back(s);
 		++l;
		int m = i;
		while(a[m] == arr[len - 1] && m > 0){
			m--;
		}
		if(l == x + 1)
			check = true;
		else{
			int index = distance(arr.begin(), find(arr.begin(), arr.end(), a[m]));
			a[m] = arr[index + 1];
			for(int p = m + 1; p <= i; p++){
				a[p] = arr[0];
			}
		}
	}
	return v[x];
}

