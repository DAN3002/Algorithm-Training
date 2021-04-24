String date(int d, int m)
{
    Calendar myCalendar = new GregorianCalendar(2009, m-1, d);
    Date myDate = myCalendar.getTime();
    SimpleDateFormat simpleDateformat = new SimpleDateFormat("EEEE");
    return simpleDateformat.format(myDate);
}
 