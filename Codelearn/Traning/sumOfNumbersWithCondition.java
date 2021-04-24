int sumOfNumbersWithCondition(int[] arr, int n)
{
    Arrays.sort(arr);
    for(int i = 0; i < arr.length; i++)
    {
        for(int j = 0; j < i; j++)
        {
            if(arr[i] % arr[j] == 0) arr[i] /= arr[j];
        }
    }

    BigInteger a = BigInteger.ONE;
    for(int i : arr) a = a.multiply(BigInteger.valueOf(i));

    return sumDivOfA(a, n);
}

int sumDivOfA(BigInteger b, int n)
{
    BigInteger c = BigInteger.valueOf(n);
    BigInteger div = c.divide(b);
    return div.multiply(div.add(BigInteger.ONE)).divide(BigInteger.TWO).multiply(b).mod(BigInteger.valueOf(1000000009)).intValue();
}

