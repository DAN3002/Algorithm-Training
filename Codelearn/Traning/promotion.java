int promotion(int x, int y, int s)
{
        if(s <= x+y) 
        {
                if(s < x) return s;
                return x;
        }        
        return (s/(x+y))*x + (s%(x+y));
}
 