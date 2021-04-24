String longestCommonSubstring(String X, String Y)
{
    int m = X.length(), n = Y.length();
    int[][] LCSuff = new int[m + 1][n + 1]; 

    int len = 0; 
    int row = 0, col = 0; 

    for (int i = 0; i <= m; i++) { 
        for (int j = 0; j <= n; j++) { 
            if (i == 0 || j == 0) 
                LCSuff[i][j] = 0; 

            else if (X.charAt(i - 1) == Y.charAt(j - 1)) { 
                LCSuff[i][j] = LCSuff[i - 1][j - 1] + 1; 
                if (len < LCSuff[i][j]) { 
                    len = LCSuff[i][j]; 
                    row = i; 
                    col = j; 
                } 
            } 
            else
                LCSuff[i][j] = 0; 
        } 
    } 

    if (len == 0) { 
        return ""; 
    } 

    String resultStr = ""; 


    while (LCSuff[row][col] != 0) { 
        resultStr = X.charAt(row - 1) + resultStr; 
        --len; 
        row--; 
        col--; 
    } 

    return resultStr;
}