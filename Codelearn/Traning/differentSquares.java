import java.util.ArrayList;
import java.util.HashSet;

public class differentSquares {
    class Square{
        public int x1, x2, x3, x4;
        public Square(int x1, int x2, int x3, int x4)
        {
            this.x1 = x1;
            this.x2 = x2;
            this.x3 = x3;
            this.x4 = x4;
        }
    }

    int differentSquares(int[][] matrix)
    {
        int n = matrix.length;
        int m = matrix[0].length;
        ArrayList<Square> arr = new ArrayList<Square>(){};
        for(int i = 0; i < n - 1; i++)
        {
            for(int j = 0; j < m - 1; j++)
            {
                Square square = new Square(matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]);
                if(arr.contains(square))
                {
                    arr.add(square);
                }
            }
        }
        return arr.size();
    }
}
