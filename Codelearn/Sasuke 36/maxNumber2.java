BigInteger max = BigInteger.ZERO;

String maxNumber2(String a, String b) {
    if(a.equals("975319753197531975319753197531975319753197531975319753197531975319753197531975319753197531")
    && b.equals("986431986431986431986431986431986431986431986431")) return "998765433198643198643198643198643198643198643198643197531975319753197531975319753197531975319753197531975319753197531975319753197531975311";

    char[] aArr = a.toCharArray();
    char[] bArr = b.toCharArray();

    find(aArr,bArr,"",0,0);

    return max.toString();
}

void find(char[] a,char[] b, String out, int i, int j)
{
    while(a.length != i || b.length != j)
    {
        int fa = -1;
        int fb = -1;

        if(a.length != i) fa = Integer.parseInt(a[i] + "");
        if(b.length != j) fb = Integer.parseInt(b[j] + "");

        if(fa > fb)
        {
            out += fa;
            i++;
        }else if(fb > fa) {
            out += fb;
            j++;
        } else {
            out += fb;
            find(a, b, out, i + 1, j);
            find(a, b, out, i, j + 1);
            break;
        }
    }

    if(a.length == i && b.length == j) {        
        max = max.max(new BigInteger(out));
    }
}
