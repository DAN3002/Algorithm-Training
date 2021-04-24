boolean isIPv4Address(String inputString)
{
    String pattern = "^(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.){3}([01]?\\d\\d?|2[0-4]\\d|25[0-5])$";
    return inputString.matches(pattern);
}
 