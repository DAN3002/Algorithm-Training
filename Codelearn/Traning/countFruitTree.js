function countFruitTree(s,e,a,b,apples,oranges){
    return [apples.filter(el => (a + el) >= s && (a+el) <= e).length,
            oranges.filter(el => (b + el) >= s && (b+el) <= e).length];
}