function longestSubsequence(s, k){
    let map = Array(26).fill(0);
    for(let i = 0; i < s.length; i++)
    {
        map[s.charCodeAt(i) - 65]++;
    }
    return Math.min(...map.slice(0,k))*k;
}
 