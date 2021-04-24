String reverseString(String str)
{
    return (new StringBuilder(str)).reverse().toString().replaceAll("[^a-zA-Z]", "");
}
 