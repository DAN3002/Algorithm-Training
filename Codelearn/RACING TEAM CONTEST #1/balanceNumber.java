boolean balanceNumber(int n) {
    String str = Math.abs(n) + "";
    return (new StringBuilder(str).reverse()).toString().equals(str);
}