boolean isValidDate(int d, int m, int y)
{
        if(d <= 0 || d > 31 || y <= 0 || m <= 0 || m > 12) return false;
        switch (m)
        {
            case 4: case 6: case 9: case 11:{
                return (d != 31);
            }
            case 2:{
                if(checkYear(y)) return (d <= 29);
                else return (d <= 28);
            }
        }
        return true;
}
boolean checkYear(int year)
    {
        return (((year % 4 == 0) && (year % 100 != 0)) ||
                (year % 400 == 0));
    }
 