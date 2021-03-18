function ratingReview(threshold, ratings){
    let out = [];
    ratings = ratings.map(el => el.reduce((a,b) => a+b,0) / el.length);
    for(let i = 0; i < ratings.length; i++)
    {
        if(ratings[i] < threshold) out.push(i);
    }
    return out;
}
 