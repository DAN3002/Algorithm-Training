int groupedBits(int x)
{
    return Integer.toBinaryString(x).split("[0]+").length;
}
