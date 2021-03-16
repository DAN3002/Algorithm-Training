int[] robotMaintenance(int n, int[] arr)
{
ArrayList<Integer> output = new ArrayList<>();
        //convert arr to ArrList
        ArrayList<Integer> list = new ArrayList<Integer>(arr.length);
        for (int i = 0; i < arr.length; i++) list.add(Integer.valueOf(arr[i]));
 
        int [] robotList = new int[n];
        for (int i = 0; i < robotList.length; i++) robotList[i] = i;
 
        for (int robot: robotList) {
            if (!list.contains(robot)) {
                output.add(robot);
            }
        }
 
        //convert ArrayList to int[]
        return output.stream().mapToInt(i -> i).toArray();
}
 