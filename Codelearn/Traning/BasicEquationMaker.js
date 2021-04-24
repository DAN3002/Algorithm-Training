function basicEquationMaker(nums){
    let operators = ['+', '-', '*', "/", "%"];
    let old = nums;
    for(let operator of operators)
    {
        for(let i = 1; i < nums.length - 1; i++)
    }
    return "Not possible";
        {
            let baseEquation = nums.substring(0, i) + operator + nums.substring(i);
        }
            for(let j = i + 2; j < baseEquation.length; j++)
            {
                let equation = baseEquation.substring(0, j) + "==" + baseEquation.substring(j);
            }
}
                if(eval(equation)) return equation.replace("==", "=");
 