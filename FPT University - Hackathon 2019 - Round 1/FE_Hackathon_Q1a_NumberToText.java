String numberToText(String num)
{
     int numInput = 0;
        try {
            numInput = Integer.parseInt(num);
        } catch (NumberFormatException e) {
            return "Khong hop le";
        }
        String output = "";
        String [] input = num.split("");
        String [] outputArr = new String[num.length()];
        for (int i = 0; i < num.length(); i++) {
            int currentValue = Integer.parseInt(input[i]);
            String currentStringValue = "";
            String postFix = "";
            switch (currentValue) {
                case 0:
                    currentStringValue = "khong";
                    break;
                case 1:
                    currentStringValue = "mot";
                    break;
                case 2:
                    currentStringValue = "hai";
                    break;
                case 3:
                    currentStringValue = "ba";
                    break;
                case 4:
                    currentStringValue = "bon";
                    break;
                case 5:
                    currentStringValue = "nam";
                    break;
                case 6:
                    currentStringValue = "sau";
                    break;
                case 7:
                    currentStringValue = "bay";
                    break;
                case 8:
                    currentStringValue = "tam";
                    break;
                case 9:
                    currentStringValue = "chin";
                    break;
            }
            switch (num.length() - i - 1) {
                case 0:
                    postFix = "don vi";
                    break;
                case 1:
                    postFix = "chuc";
                    break;
                case 2:
                    postFix = "tram";
                    break;
                case 3:
                    postFix = "nghin";
                    break;
                case 4:
                    postFix = "chuc";
                    break;
                case 5:
                    postFix = "tram";
                    break;
                case 6:
                    postFix = "trieu";
                    break;
                case 7:
                    postFix = "chuc";
                    break;
            }
            outputArr[i] = currentStringValue + " " + postFix;
        }
        output = String.join(", ", outputArr);
        return output.substring(0, 1).toUpperCase() + output.substring(1);
}

