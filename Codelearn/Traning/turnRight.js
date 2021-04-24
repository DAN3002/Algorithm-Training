function turnRight(a){
    let count = 0;
    let check = true;
    let check2 = true;
    let current = a[0];
    for(let i = 1; i < a.length; i++)
    {
        let move = a[i];      
        if(check)
        {
            if(check2)
            {
                if(move[0] - current[0] == 1)
                {
                    count++;
                    check = false;
                    check2 = true;
                } else if(current[0] - move[0] == 1){
                    check = false;
                    check2 = false;
                } else if(move[1] - current[1] == 1)
                {
                    check2 = false;
                }
            } else {
                if(move[0] - current[0] == 1)
                {
                    check = false;
                    check2 = true;
                } else if(current[0] - move[0] == 1){
                    count++;
                    check = false;
                    check2 = false;                    
                } else if(move[1] - current[1] == 1)
                {
                    check2 = true;
                }              
            }

        } else {
            if(check2)
            {
                if(move[1] - current[1] == -1)
                {
                    count++;
                    check = true;
                    check2 = false;
                } else if(current[1] - move[1] == -1) {
                    check = true; 
                    check2 = true;
                } else if(move[0] - current[0] == -1)
                {
                    check2 = false;
                }
            } else {
                if(move[1] - current[1] == -1)
                {
                    check = true; 
                    check2 = false;
                } else if(current[1] - move[1] == -1) {
                    count++;
                    check = true;
                    check2 = true;                    
                } else if(move[0] - current[0] == -1)
                {
                    check2 = true;
                }                
            }

            
        }
        // console.log(move + " " + check + " " + check2);
        current = move;
    }

    return count;
}
