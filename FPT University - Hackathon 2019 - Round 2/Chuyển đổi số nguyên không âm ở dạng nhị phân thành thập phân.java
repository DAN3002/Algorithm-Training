String convertBinaryToUnsignedInteger(String strBinary)
{
    try {
        return String.valueOf(Integer.parseInt(strBinary, 2));
    } catch (Exception e) {
        return "Khong hop le";
    }
    // boolean valid = true;
    // if (valid) {
        // return String.valueOf(Integer.parseInt(strBinary, 2));
    // }
}
 