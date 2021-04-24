int numberOfSocks(String[] socks)
{
        int count = 0;
        HashMap<String, Integer> map = new HashMap<>();
        for(String sock : socks)
        {
            String other;
            if ("R".equals(sock.charAt(0) + "")) other = "L".concat(sock.substring(1));
            else other = "R".concat(sock.substring(1));
 
            Integer index = map.get(other);
            if(index != null)
            {
                count++;
                if(index == 1) map.remove(other);
                else map.put(other, index--);
            } else map.put(sock, 1);
        }
        return count;
}
 