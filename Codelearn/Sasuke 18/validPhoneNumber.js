function validPhoneNumber(phone){
    if(phone.length != 10) return false;
    if(phone[0] !== '0' || ["4","7","0"].some(el => el === phone[9])) return false;
    return Array.from(phone).every(el => "0123456789".includes(el));
}
 