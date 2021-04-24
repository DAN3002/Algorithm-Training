function maxReward(n,k){
    if (k.length == 1) return k[0];
    let reward = ucln(k[0], k[1]);
    for (let i = 2; i < k.length; i++) {
        reward = ucln(reward, k[i]);
    }
    if (reward > 1) return reward;
    else {
        reward = k[0];
        for (let i = 1; i < k.length; i++) {
            if (k[i] < reward) reward = k[i];
        }
        return reward;
    }
}

function ucln(a, b) {
    if (b == 0) return a;
    return ucln(b, a % b);
}
