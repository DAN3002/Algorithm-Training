int countNumbersBeautiful(long a, long b) {
   String stra = a + "" ;
   String strb = b  + "";
   int count = 0;

    for(int size = stra.length(); size <= strb.length(); size++)
    {
        for(int i = 1; i <= 9; i++)
        {
            long cal = repeat(i, size);
            if(cal >= a && cal <= b) count++;
        }        
    }
    return count;

//    if(stra.length() == strb.length())
//    {
//         for(int i = 1; i <= 9; i++)
//         {
//             long cal = repeat(i, stra.length());
//             if(cal >= a && cal <= b) count++;
//         }
//    } else {
//         count = 9 *(strb.length() - stra.length() - 2);
//         for(int i = 1; i <= 9; i++)
//         {

//             if(repeat(i, stra.length()) >= a) count++;
//             if(repeat(i, strb.length()) <= b) count++;
//         }
//    }    
//    return count;
}

long repeat(int i, int length)
{
    String out = "";
    for(int j = 0; j < length; j++) out += i;
    return Long.parseLong(out);
}
