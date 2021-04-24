char convertChar(char ch) {
    return(char)(~ch & 0xFF>>1);
}