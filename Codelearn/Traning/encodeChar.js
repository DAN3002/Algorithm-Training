function encodeChar(str) {
   return str.replace(/[A-Z]/g, "")
            .replace(/[a-z]/g, "*")
            .replace(/[0-9]/g, "-");
}