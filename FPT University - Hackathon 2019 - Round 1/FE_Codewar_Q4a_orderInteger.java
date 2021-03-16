String orderInteger(String[] arrInt)
{
ArrayList<String> ints =new ArrayList<>(Arrays.asList(arrInt));
        if(ints.size() > 4) return "So phan tu > 4 so";
        if(!ints.stream().allMatch(s -> {
            Pattern pattern1 = Pattern.compile("-?\\d+\\.(\\d){3}");
            return pattern1.matcher(s).matches();
        })) return "Khong hop le";

        ArrayList<Double> arr = new ArrayList<>();;
        DecimalFormat df = new DecimalFormat("#.##");
        ints.forEach(s -> {
            double d = Double.parseDouble(s);
            String g = df.format(d);
            arr.add(Double.valueOf(g));
        });
        Collections.sort(arr);
        StringBuilder sb = new StringBuilder();
        arr.forEach(d -> {
            sb.append(d).append(" ");
        });
        return sb.toString().trim();
}

