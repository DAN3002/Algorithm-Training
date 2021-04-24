int calculateElectricBill(int n)
{
    if(n <= 50)
    {
        return 1000 + n*230;
    } else if (n <= 100)
    {
        return 1000 + 50*230 + (n-50)*480;
    } else if (n <= 149)
    {
        return 1000 + 50*230 + 50*480 + (n-100)*700;
    } else {
        return 1000 + 50*230 + 50*480 + 49*700 + (n-149)*900;
    }
}
 