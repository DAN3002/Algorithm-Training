int distributeCandy(std::vector<int> ratings)
{
    int n=ratings.size();
    vector<int>candies(n);
    for(int i=0;i<n;i++){
        candies[i]=1;
    }
    for(int i=1;i<n;i++){
        if(ratings[i]==ratings[i-1]) continue;
    
        else if(ratings[i]>ratings[i-1]&&candies[i]<=candies[i-1])
         candies[i]=candies[i-1]+1;
        else{
            int j=i-1;
            while(j>=0&&ratings[j]>ratings[j+1]&candies[j]<=candies[j+1]){
             candies[j]=candies[j+1]+1;
             j--;
            }
        }
    }
    int ans=candies[0];
    for(int i=1;i<n;i++)
     ans+=candies[i];
    return ans;
}
 