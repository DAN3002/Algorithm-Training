String sumEvenNumber(String n)
{
 Pattern pattern2 = Pattern.compile("\\d+(\\.\\d+)?");
        Pattern pattern1 = Pattern.compile("-?\\d+(\\.\\d+)?");
        Pattern pattern3 = Pattern.compile("-\\d+(\\.\\d+)?");
        //check co phai số k
        if (!pattern1.matcher(n).matches()) {
            return "Khong hop le";
        }
        //chekc so am
        if (pattern3.matcher(n).matches() && n.length() <= 4) {
            return "Khong hop le";
        } else if(pattern3.matcher(n).matches() && n.length() > 4){
            return "Khong hop le hoac Ngoai vung tinh tong chan";
        }

        if(pattern2.matcher(n).matches() && n.length() > 4){
            return "Ngoai vung tinh tong chan";
        }

        double a = Double.parseDouble(n);
        int b = 0;
        for (int i = 1; i <= a / 2; i++) {
            b += 2 * i;
        }
        return String.valueOf(b);
}

