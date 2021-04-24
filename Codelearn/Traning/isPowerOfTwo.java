package codelearn;

import java.math.BigInteger;

public class isPowerOfTwo {
    boolean isPowerOfTwo(int n)
    {
        return (n > 0 && ((n & (n - 1)) == 0));
    }    
}
