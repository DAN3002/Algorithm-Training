function isNonOverlappingSubstrings(s){
    return (s.indexOf( "AB")!=-1) &&  (s.indexOf( "BA")!=-1) && (s.indexOf( "AB",s.indexOf( "BA") + 2)!=-1)
}
 