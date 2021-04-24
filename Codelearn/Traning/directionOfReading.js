function directionOfReading(numbers){
    let size = numbers.length;
    numbers = numbers.map(number => {
        return (number + "").padStart(size, "0");
    });
    let output = [];
    for(let i = 0; i < size; i++)
    {
        let str = '';
        for(let j = 0; j < size; j++)
        {
            str += numbers[j].charAt(i);
        }
        output.push(parseInt(str));
    }
    return output;
}
 