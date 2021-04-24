let res = [];

function parse(x) {
    let n = 0, s = 0;
    while (x) {
        n++;
        s += x % 10;
        x = Math.floor(x/10);
    }
    return [n, s];
}

function dfs(len, x) {
    let c = parse(x);
    let n = c[0], s = c[1];
    if (s > 10 || n > len)
        return;
    if (n == len && s == 10) {
        res.push(x);
        return;
    }
    for(let i = 0; i <= 10 - s; i++)
    {
        dfs(len, x * 10 + i);
    }
}

function perfectNumber(k) {
    let len = 0;
    while (true) {
        len++;
        for(let i = 1; i <= 9; i++) dfs(len, i);
        if (res.length >= k) {
            return res[k - 1];
        }
        k -= res.length;
        res = [];
    }
}
