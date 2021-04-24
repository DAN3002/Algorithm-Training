function uniqueNumber(arr){
    return arr.find((element, index) => {
        return arr.every((ele,i) => {
            return i == index || ele != element;
        });
    });
}
 