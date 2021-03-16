String isEvenNumber(String s)
{
      if (s.length() > 8) {
            return s +" is out of range to check";
        }
        Pattern pattern = Pattern.compile("-?\\d+");
        if (pattern.matcher(s).matches()) {
            if (Integer.parseInt(s) % 2 == 0) {
                return s+ " is even";
            } else {
                return s+ " is not even";
            }
        }
        Pattern pattern2 = Pattern.compile("-?\\d+(\\.\\d+)?");
        if(pattern2.matcher(s).matches()){
            return s+" is an invalid integer number";
        }

        return s +" is an invalid integer number";
}

