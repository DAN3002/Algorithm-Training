function groupsIn(n) {
    return (Math.abs(n) <= 500 ? 1 : 0) + ( n <= 0 ? 1 : 2);
}
