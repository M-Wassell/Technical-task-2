
function TaskFunction(value1, value2, value3, value4)//3,5,4,6
{
    let returnValue = "" ;
    for(let i = 1; i<=100; i++)
    {
        if(i%value1 == 0 && i%value2 == 0)
        {
            returnValue +=  'FizzBuzz   ';
        }
        else if (i%value1 == 0)
        {
            returnValue += 'Fizz   ';
        }
        else if (i%value1 == 0 && i%value3 == 0 && i%value4 == 0)
        {
            returnValue += 'FizzPopSnap   ';
        }
        else if (i%value1 == 0 && i%value3 == 0 && i%value4 == 0 && i%value2 == 0)
        {
            returnValue += 'FizzPopBuzzSnap   ';
        }
        else if (i%value1 == 0 && i%value3 == 0)
        {
            returnValue += 'FizzPop   ';
        }
        else if (i%value2 == 0)
        {
            returnValue += 'Buzz   ';
        }
        else if(i%value2 == 0 && i%value3 ==0)
        {
            returnValue += 'PopBuzz   ';
        }
        else if(i%value2 == 0 && i%value4 ==0)
        {
            returnValue += 'BuzzSnap   ';
        }
        else if(i%value2 == 0 && i%value3 ==0 && i%value4 ==0)
        {
            returnValue += 'BuzzPopSnap   ';
        }
        else if (i%value3 == 0)
        {
            returnValue += 'Pop   ';
        }
        else if (i%value4 == 0)
        {
            returnValue += 'Snap   ';
        }
        else{
            returnValue += i + '  ';
        }
    }
    return returnValue;// never reaches snap!!!
}
// to seperate concerns 
function Submit()
{
    let output='';
    let val1 = document.getElementById('Num1').value;
    let val2 = document.getElementById('Num2').value;
    let val3 = document.getElementById('Num3').value;
    let val4 = document.getElementById('Num4').value;
    output = TaskFunction(val1,val2,val3,val4);
    document.getElementById('results').innerHTML = output;
}



    


