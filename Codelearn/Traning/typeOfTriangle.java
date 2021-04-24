int typeOfTriangle(int a, int b, int c)
{
    if(a + b <= c || a + c <= b || b + c <= a) return -1;
    if(a == b && b == c) return 1;
    if(a == b || b == c || c == a) return 2;
    if(Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) || 
    Math.pow(b,2) + Math.pow(c,2) == Math.pow(a,2) ||
    Math.pow(a,2) + Math.pow(c,2) == Math.pow(b,2)) return  3;
    return 0;
} 