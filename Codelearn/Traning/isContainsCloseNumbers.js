function isContainsCloseNumbers(nums, k){    
    for(let i = 0; i < nums.length; i++)
    {
        let element = nums[i];
        for(let j = i + 1; j <= i + k; j++)
        {
            if(nums[j] == element) return true;
        }
    }
    return false;
}
 