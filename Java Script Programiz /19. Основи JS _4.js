
function foo(start, end)

{   
    let newArr = [];
    for (let element = start; element <= end; element ++)
    {
        let counter = 0;
        for (let i = 2; i < element; i ++) 
        {
            if (element % i == 0)
            {
                counter ++;
                break;
            }
        }
        if (!counter)
        {
            newArr.push(element);
        }

    }
    return newArr;
}


console.log(foo(1, 1000));
